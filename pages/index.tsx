import { Layout } from "../components/layout/Layout";
import { Box, Heading, Text, HStack, VStack, Link } from "@chakra-ui/react";
import { WikiTooltip } from "../components/wikiTooltip";

export default function Home() {
  return (
    <Layout>
      <Box maxW={700} shadow="md" rounded="lg" p={{ base: 3, md: 8 }}>
        <Box>
          <Heading>¿Quién soy? 🤷</Heading>
          <Box mt={5}>
            <VStack>
              <Text>
                ¡Hola! 👋 soy Dani, desarrollador web especializado en hacer
                aplicaciones web. Me reinvente hace unos años y pienso desde
                entonces que he encontrado mi pasión, pues es mi trabajo y a la
                vez mi afición. Provengo del mundo de las artes plásticas,
                además siempre me gustó andar entre ordenadores.
              </Text>
              <Text>
                Hubo un tiempo en que no tenía un ordenador en casa y recuerdo
                empezar a hacer páginas web con{" "}
                <WikiTooltip>FrontPage</WikiTooltip> en casa de mi vecino (nos
                pasabamos horas por la tarde investigando) y cada día ahorraba
                para poder tener mi propio pc.
              </Text>
              <Text>
                Lo mio siempre ha sido cacharrear con ordenadores, pero támbien
                desde pequeño disfruté mucho del dibujo, una actividad que en mi
                opinión esta muy relacionada con el desarrollo a la hora de
                crear, construir e ir viendo poco a poco el resultado de la
                obra.
              </Text>
            </VStack>
            <HStack spacing={6} mt={10} justify="end">
              <Link href="https://github.com/pangeasi" color="purple.400">
                GitHub
              </Link>
              <Link href="https://twitter.com/Danitiwt" color="blue.400">
                Twitter
              </Link>
              <Link
                href="https://www.linkedin.com/in/dani-ballesteros/"
                color="green.400"
              >
                Linkedin
              </Link>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
