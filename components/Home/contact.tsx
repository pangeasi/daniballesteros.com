import { useToast } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../Input";

const schema = yup.object({
  name: yup.string().required("El nombre es requerido"),
  email: yup.string().email().required("El email es requerido"),
  message: yup.string().required("El mensaje es requerido"),
});
type FormValues = yup.InferType<typeof schema>;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sended, setSend] = useState(false);
  const toast = useToast();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (values) => {
    setLoading(true);
    fetch("/api/send", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.error) {
          toast({
            title: "El envio falló",
            description:
              "Puedes intentarlo más tarde, o contactarme a daniballesteros@protonmail.com",
            status: "error",
          });
        } else {
          setTimeout(() => {
            setSend(true);
            toast({
              title: "Tu mensaje fue enviado!",
              description: "Responderé a tu mensaje lo antes posible.",
              status: "success",
            });
            reset();
          }, 1500);
        }
      });
  };
  return (
    <div className="sm:w-[400px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Input
                placeholder="Nombre"
                error={errors.name && errors.name.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <>
                <Input
                  placeholder="Email"
                  error={errors.email && errors.email.message}
                  {...field}
                />
              </>
            )}
          />
          <Controller
            control={control}
            name="message"
            render={({ field }) => (
              <>
                <textarea
                  className="focus:outline-0 border-2 border-gray-300 p-2 rounded-md"
                  placeholder="Escribeme"
                  {...field}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm -mt-4">
                    {errors.message.message}
                  </span>
                )}
              </>
            )}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-t from-blue-600 to-cyan-600 text-white px-2 py-1 rounded-sm transition ease-linear hover:brightness-150"
              disabled={loading}
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
