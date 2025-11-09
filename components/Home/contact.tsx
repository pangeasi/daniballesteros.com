import { Controller, useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../Input";
import { toast } from "react-toastify";

const schema = yup.object({
  name: yup.string().required("El nombre es requerido"),
  email: yup.string().email().required("El email es requerido"),
  message: yup.string().required("El mensaje es requerido"),
});
type FormValues = yup.InferType<typeof schema>;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sended, setSend] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaWidgetId = useRef<number | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (!siteKey) {
      console.warn("Falta la variable NEXT_PUBLIC_RECAPTCHA_SITE_KEY");
      return;
    }
    if (typeof window === "undefined") {
      return;
    }

    const loadRecaptcha = () => {
      if (!window.grecaptcha || recaptchaWidgetId.current !== null) {
        return;
      }
      recaptchaWidgetId.current = window.grecaptcha.render(
        "recaptcha-container",
        {
          sitekey: siteKey,
          callback: (token: string) => {
            setCaptchaToken(token);
          },
          "expired-callback": () => {
            setCaptchaToken(null);
          },
          "error-callback": () => {
            setCaptchaToken(null);
          },
        }
      );
    };

    if (window.grecaptcha) {
      loadRecaptcha();
    } else {
      window.onRecaptchaLoadCallback = loadRecaptcha;
    }

    const scriptId = "recaptcha-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoadCallback&render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else if (window.grecaptcha) {
      loadRecaptcha();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.onRecaptchaLoadCallback = undefined;
      }
    };
  }, [siteKey]);

  const onSubmit = async (values: FormValues) => {
    if (!siteKey) {
      toast.error("El formulario no está configurado correctamente.");
      return;
    }
    if (!captchaToken) {
      toast.error("Por favor confirma que no eres un robot.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/send", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ ...values, token: captchaToken }),
      });
      const data = await response.json();
      if (!response.ok || data.error) {
        toast.error(
          "El envio falló. Puedes intentarlo más tarde, o contactarme a daniballesteros@protonmail.com"
        );
        return;
      }
      setTimeout(() => {
        setSend(true);
        toast.success(
          "Tu mensaje fue enviado! Te responderé lo antes posible"
        );
        reset();
      }, 1500);
    } catch (error) {
      toast.error(
        "El envio falló. Puedes intentarlo más tarde, o contactarme a daniballesteros@protonmail.com"
      );
    } finally {
      setLoading(false);
      setCaptchaToken(null);
      if (typeof window !== "undefined" && window.grecaptcha) {
        if (recaptchaWidgetId.current !== null) {
          window.grecaptcha.reset(recaptchaWidgetId.current);
        }
      }
    }
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
                  className={`${
                    errors.message ? "border-red-600 border-1" : ""
                  } focus:outline-1 focus:outline-blue-600 border-2 border-gray-300 p-2 rounded-md`}
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
          <div id="recaptcha-container" className="self-center" />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-t from-blue-600 to-cyan-600 text-white px-2 py-1 rounded-sm transition ease-linear hover:brightness-150"
              disabled={loading}
            >
              Enviar
              {loading && (
                <div
                  className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full ml-2"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
