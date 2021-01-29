import { Layout } from "../components/layout/Layout";
import {
  Box,
  Flex,
  Icon,
  Heading,
  Group,
  Image,
  useBreakpoint,
  useBreakpointValue,
} from "bumbag";

const projects = [
  {
    title: "GoToShirt",
    description: `Aplicacion realizada en React native para iPhone y Android, fue una practica/proyecto que hice junto a mis compañeros para el curso. Se trata de una app para crear tu propia camiseta y compartirla con un grupo de amigos (contactos de tu agenda y que tuvieran la app), tiene dos modos, el de edicion y el de previsualización 3D. Se monto un servidor para poder generar la textura para el modelo 3D realizado con puppeteer y jimp.`,
    cover: "gotoshirt.png",
    url: "https://github.com/bulbrange/goToShirt",
  },
  {
    title: "Fromplace",
    description:
      "Plataforma para alquiler de espacios entre particulares o empresas, con un buscador capaz de buscar por geolocalización y otros filtros. Se desarrollado en un entorno totalmente javascript, la parte del cliente con React junto a Next y en el servidor con NodeJS, graphQL, mariaDB.",
    cover: "fromplace.png",
    url: "https://fromplace.com/",
  },
  {
    title: "Elena Lujan",
    description:
      "Elena Luján me pidio que crease una web para dar visibilidad en internet al taller familiar que llevan ella y su madre. Es una web estática realizada con React y Next, esta pensada como una landing page de una sola ruta.",
    cover: "elenalujan.png",
    url: "https://elenalujan.es/",
  },
  {
    title: "Becas Universia",
    description:
      "Buscador de becas nacionales e internacionales con su potente buscador realizado con el motor de Elastic Search. En el equipo tuve el perfil de backend, implementando las mejoras de los filtros y refinamiento de busqueda, sugerencias y web scraping de otros portales y blogs que publican becas. Realizado sobre una arquitectura de microservicios, desarrollado en NodeJS y mongoDB.",
    cover: "universia.png",
    url: "https://becas.universia.net/",
  },
  {
    title: "ICEMD TV",
    description:
      "Actualmente estoy desarrollando junto a mi equipo la plataforma de cursos online para ICEMD, se trata de una aplicación para consumir videos bajo demanda. Desarrollada en Angular.js y NodeJS junto con mongoDB y Firebase",
    cover: "icemdtv.png",
    url: "https://github.com/bulbrange/goToShirt",
  },
  {
    title: "Baden Baden",
    description:
      "Elena y Sergio me encargador una web estática que les sirviera como escaparate para su marca, tienen un negocio te reparto a domicilio de comida 100% productos alemanes de calidad. Desarrollada en Next.js",
    cover: "badenbaden.png",
    url: "https://badenbadencorner.com/",
  },
];

const About = () => {
  const size = useBreakpoint("mobile");
  return (
    <Layout>
      <Heading use="h2" marginBottom="3rem">
        Proyectos realizados
      </Heading>
      {projects.map((project) => (
        <a href={project.url} key={project.title} target="blank">
          <Group
            verticalBelow="tablet"
            gap="0.5rem"
            altitude="400"
            marginBottom="2rem"
          >
            <Box
              {...{ minWidth: size ? null : "350px" }}
              minHeight="180px"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              backgroundImage={`url(images/projects/${project.cover})`}
            />
            <Box padding="0.5rem">
              <Heading use="h3" fontSize="300" marginY="0.6rem">
                {project.title}
              </Heading>
              {project.description}
            </Box>
          </Group>
        </a>
      ))}
    </Layout>
  );
};

export default About;
