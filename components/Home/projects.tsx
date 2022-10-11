import Image from "next/image";
import { useBreakpoint } from "../../hooks/useBreakpoints";

const projects = [
  {
    title: "GoToShirt",
    description: `Aplicacion realizada en React native para iPhone y Android, fue una practica/proyecto que hice junto a mis compañeros para el curso. Se trata de una app para crear tu propia camiseta y compartirla con un grupo de amigos (contactos de tu agenda y que tuvieran la app), tiene dos modos, el de edicion y el de previsualización 3D. Se monto un servidor para poder generar la textura para el modelo 3D realizado con puppeteer y jimp.`,
    cover: "gotoshirt.png",
    width: 400,
    height: 205,
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
    height: 205,
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
    height: 205,
    url: "https://badenbadencorner.com/",
  },
  {
    title: "Covid-vacuna.app",
    description:
      "Mi contribución a la aplicación desarrollada por Miguel Ángel Durán que trata de visibilizar los datos recopilados de los avances en la situación de vacunación es España. Desarrollada en Next.js",
    cover: "covidvacuna_400x.png",
    width: 400,
    height: 205,
    url: "https://covid-vacuna.app/",
  },
];

const Projects = () => {
  const { isMobile } = useBreakpoint();
  return (
    <div className="flex flex-col gap-10">
      {projects.map((project) => (
        <div
          key={project.title}
          className="grid grid-flow-col gap-8 shadow-md h-[300px] rounded-xl"
        >
          <Image
            width={project.width}
            height={project.height}
            objectFit="cover"
            src={`/images/projects/${project.cover}`}
          />
          <div>
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-gray-500">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
