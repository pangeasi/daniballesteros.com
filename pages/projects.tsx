import { Layout } from "../components/layout/Layout";
import { Box, Heading, Image, Stack, VStack } from "@chakra-ui/react";

const projects = [
  {
    title: "GoToShirt",
    description: `Aplicacion realizada en React native para iPhone y Android, fue una practica/proyecto que hice junto a mis compañeros para el curso. Se trata de una app para crear tu propia camiseta y compartirla con un grupo de amigos (contactos de tu agenda y que tuvieran la app), tiene dos modos, el de edicion y el de previsualización 3D. Se monto un servidor para poder generar la textura para el modelo 3D realizado con puppeteer y jimp.`,
    cover: "gotoshirt.png",
    width: 400,
    height: 218,
    url: "https://github.com/bulbrange/goToShirt",
  },
  {
    title: "Fromplace",
    description:
      "Plataforma para alquiler de espacios entre particulares o empresas, con un buscador capaz de buscar por geolocalización y otros filtros. Se desarrollado en un entorno totalmente javascript, la parte del cliente con React junto a Next y en el servidor con NodeJS, graphQL, mariaDB.",
    cover: "fromplace.png",
    width: 400,
    height: 205,
    url: "https://fromplace.com/",
  },
  {
    title: "Becas Universia",
    description:
      "Buscador de becas nacionales e internacionales con su potente buscador realizado con el motor de Elastic Search. En el equipo tuve el perfil de backend, implementando las mejoras de los filtros y refinamiento de busqueda, sugerencias y web scraping de otros portales y blogs que publican becas. Realizado sobre una arquitectura de microservicios, desarrollado en NodeJS y mongoDB.",
    cover: "universia.png",
    width: 400,
    height: 204,
    url: "https://becas.universia.net/",
  },
  {
    title: "ESIC play",
    description:
      "Actualmente estoy desarrollando junto a mi equipo la plataforma de cursos online para ICEMD, se trata de una aplicación para consumir videos bajo demanda. Desarrollada en Angular.js y NodeJS junto con mongoDB y Firebase",
    cover: "icemdtv.png",
    width: 400,
    height: 205,
    url: "https://play.esic.edu",
  },
  {
    title: "Baden Baden",
    description:
      "Elena y Sergio me encargador una web estática que les sirviera como escaparate para su marca, tienen un negocio de reparto a domicilio de comida alemana. Desarrollada en Next.js",
    cover: "badenbaden_400x.png",
    width: 400,
    height: 195,
    url: "https://badenbadencorner.com/",
  },
  {
    title: "Covid-vacuna.app",
    description:
      "Mi contribución a la aplicación desarrollada por Miguel Ángel Durán que trata de visibilizar los datos recopilados de los avances en la situación de vacunación es España. Desarrollada en Next.js",
    cover: "covidvacuna_400x.png",
    width: 400,
    height: 192,
    url: "https://covid-vacuna.app/",
  },
];

const Projects = () => {
  return (
    <Layout>
      <Heading as="h2" mb="3rem">
        Proyectos realizados 👨‍💻
      </Heading>
      <VStack spacing={10}>
        {projects.map((project) => (
          <a href={project.url} key={project.title} target="blank">
            <Stack
              direction={{ base: "column", md: "row" }}
              shadow="md"
              rounded="lg"
            >
              <Image
                roundedStart={{ base: "none", md: "lg" }}
                roundedTop={{ base: "lg", md: "none" }}
                width={{ base: "100%", md: 300 }}
                minH={180}
                objectFit="cover"
                src={`images/projects/${project.cover}`}
              />
              <Box padding="0.5rem">
                <Heading as="h3">{project.title}</Heading>
                {project.description}
              </Box>
            </Stack>
          </a>
        ))}
      </VStack>
    </Layout>
  );
};

export default Projects;
