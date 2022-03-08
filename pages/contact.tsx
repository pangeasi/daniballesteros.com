import { Layout } from "../components/layout/Layout";
import {
  Input,
  Textarea,
  Button,
  Box,
  Spinner,
  Flex,
  useToast,
  Heading,
  VStack,
  FormControl,
  FormErrorMessage,
  HStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sended, setSend] = useState(false);
  const toast = useToast();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<{
    name: string;
    email: string;
    message: string;
  }>();
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
    <Layout>
      <Box shadow="md" rounded="lg" p={8}>
        <Heading as="h2" mb={4}>
          Contacta conmigo {sended ? "📫" : "📪"}
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <FormControl isInvalid={!!errors.name}>
              <Input
                type="text"
                placeholder="Nombre"
                {...register("name", { required: "Pon tu nombre" })}
              />
              <FormErrorMessage></FormErrorMessage>
              {errors.name && errors.name.message}
            </FormControl>
            <FormControl isInvalid={!!errors.email}>
              <Input
                type="email"
                placeholder="Correo"
                {...register("email", {
                  required: "El correo es requerido",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Correo invalido",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.message}>
              <Textarea
                placeholder="Escribeme..."
                name="message"
                {...register("message", { required: "Introduce tu mensaje" })}
              />
              <FormErrorMessage>
                {errors.message && errors.message.message}
              </FormErrorMessage>
            </FormControl>
          </VStack>
          <HStack align="center" mt={4} spacing={10}>
            <Button type="submit" disabled={loading}>
              Enviar
            </Button>
            {loading && (
              <Box>
                <Spinner />
              </Box>
            )}
          </HStack>
        </form>
      </Box>
    </Layout>
  );
};
export default Contact;
