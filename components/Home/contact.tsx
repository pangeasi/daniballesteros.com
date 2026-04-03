import { Controller, useForm, type Resolver } from "react-hook-form";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../Input";
import { toast } from "react-toastify";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const schema: yup.ObjectSchema<FormValues> = yup.object({
  name: yup.string().required("El nombre es requerido"),
  email: yup.string().email().required("El email es requerido"),
  message: yup.string().required("El mensaje es requerido"),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sended, setSend] = useState(false);
  const [captchaReady, setCaptchaReady] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema) as Resolver<FormValues>,
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  useEffect(() => {
    if (!siteKey) {
      console.warn("Falta la variable NEXT_PUBLIC_RECAPTCHA_SITE_KEY");
      return;
    }
    if (typeof window === "undefined") {
      return;
    }

    setCaptchaReady(false);

    const scriptId = "recaptcha-script";
    const initializeRecaptcha = () => {
      if (!window.grecaptcha) {
        return;
      }
      window.grecaptcha.ready(() => {
        setCaptchaReady(true);
      });
    };

    if (window.grecaptcha) {
      initializeRecaptcha();
      return;
    }

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      script.onload = initializeRecaptcha;
      document.body.appendChild(script);
    } else {
      initializeRecaptcha();
    }

    return () => {
      const script = document.getElementById(scriptId);
      if (script) {
        script.onload = null;
      }
    };
  }, [siteKey]);

  const onSubmit = async (values: FormValues) => {
    if (!siteKey) {
      toast.error("El formulario no está configurado correctamente.");
      return;
    }
    if (typeof window === "undefined" || !window.grecaptcha) {
      toast.error("No se pudo cargar el sistema anti bots. Intenta nuevamente más tarde.");
      return;
    }

    if (!captchaReady) {
      toast.error("El verificador de seguridad aún se está cargando. Intenta de nuevo en unos segundos.");
      return;
    }
    setLoading(true);
    try {
      const token = await window.grecaptcha.execute(siteKey, { action: "contact" });

      const response = await fetch("/api/send", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ ...values, token }),
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
          <p className="text-[11px] text-right text-gray-500">
            Este sitio está protegido por reCAPTCHA y aplican la {" "}
            <a
              className="underline"
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Política de Privacidad
            </a>{" "}
            y los {" "}
            <a
              className="underline"
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noreferrer"
            >
              Términos de Servicio
            </a>{" "}
            de Google.
          </p>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-t from-blue-600 to-cyan-600 text-white px-2 py-1 rounded-sm transition ease-linear hover:brightness-150"
              disabled={loading || !captchaReady}
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
