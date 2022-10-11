import AboutMe from "../components/Home/AboutMe";
import Contact from "../components/Home/contact";
import { ContactIcon } from "../components/Icons/contact";
import { Layout } from "../components/layout/Layout";
//import Projects from "../components/Home/projects";
// import { ProjectsIcon } from "../components/Icons/projects";
// import { SkillsIcon } from "../components/Icons/skills";

export default function Home() {
  return (
    <Layout>
      <AboutMe />
      {/* <section id="projects">
        <h2 className="text-3xl mt-8">
          <span>
            <ProjectsIcon className="text-5xl inline-flex pb-1" />
          </span>{" "}
          Proyectos
        </h2>
        <Projects />
      </section> */}

      {/* <section id="skills">
        <h2 className="text-3xl mt-8">
          <span>
            <SkillsIcon className="text-5xl inline-flex pb-1" />
          </span>{" "}
          Habilidades
        </h2>
      </section> */}

      <section id="contact" className="flex flex-col items-center">
        <h2 className="text-3xl mt-8">
          <span>
            <ContactIcon className="text-5xl inline-flex pb-1" />
          </span>{" "}
          Contacto
        </h2>
        <Contact />
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
