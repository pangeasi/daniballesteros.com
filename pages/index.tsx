import AboutMe from "../components/Home/AboutMe";
import { Layout } from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <AboutMe />
      <section>
        <h2 className="text-2xl text-center mt-8">Tecnologías</h2>
      </section>

      {/* <VStack align="start">
        <HStack>
          <Text fontWeight="bold" fontSize={{ base: 40 }}>
            Hola, soy Dani
          </Text>
        </HStack>

        <Text fontSize={{ base: 20 }}>
          Desarrollador front-end, especializado en react
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
      </HStack> */}
    </Layout>
  );
}
