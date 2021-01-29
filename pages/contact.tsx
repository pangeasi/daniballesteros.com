import { Layout } from "../components/layout/Layout";
import {
  Card,
  FieldStack,
  Input,
  Textarea,
  Button,
  Box,
  Group,
  Spinner,
  Flex,
  useToasts,
} from "bumbag";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToasts();
  const { handleSubmit, register, errors, reset } = useForm();
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
        setTimeout(() => {
          setLoading(false);
          toast.success({
            title: "Tu mensaje fue enviado!",
            message: "Responderé a tu mensaje lo antes posible.",
          });
          reset();
        }, 1500);
        console.log(data);
      });
  };
  return (
    <Layout>
      <Card>
        <Card.Header>
          <Card.Title>Contacta conmigo</Card.Title>
        </Card.Header>
        <Card.Content>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldStack orientation="horizontal">
              <Box>
                <Input
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  ref={register({ required: "Pon tu nombre" })}
                />
                {errors.name && errors.name.message}
              </Box>
              <Box>
                <Input
                  type="mail"
                  placeholder="Correo"
                  name="email"
                  ref={register({
                    required: "El correo es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Correo invalido",
                    },
                  })}
                />
                {errors.email && errors.email.message}
              </Box>
            </FieldStack>
            <FieldStack marginTop="0.8rem">
              <Textarea
                placeholder="Escribeme..."
                name="message"
                ref={register({ required: "Introduce tu mensaje" })}
              />
              {errors.message && errors.message.message}
            </FieldStack>
            <Flex gap="2rem">
              <Button type="submit" marginTop="0.8rem" disabled={loading}>
                Enviar
              </Button>
              {loading && (
                <Box alignY="center">
                  <Spinner />
                </Box>
              )}
            </Flex>
          </form>
        </Card.Content>
      </Card>
    </Layout>
  );
};
export default Contact;
