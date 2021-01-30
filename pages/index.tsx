import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Layout } from "../components/layout/Layout";
import { Flex, Card, Box } from "bumbag";
import { Logo } from "../components/svgs/Logo";

export default function Home() {
  return (
    <Layout>
      <Box>
        <Card marginBottom="200px" maxWidth="700px">
          <Card.Header>
            <Card.Title>¿Quién soy?</Card.Title>
          </Card.Header>
          <Card.Content>
            <p>
              ¡Hola! 👋 soy Dani Ballesteros, desarrollador web especializado en hacer aplicaciones web. Me reinvente hace unos años y pienso desde entonces que he encontrado mi pasión, pues es mi trabajo y a la vez mi afición. Provengo del mundo de las artes plásticas, además siempre me gustó andar entre ordenadores. 
            </p>
            <p>
              Hubo un tiempo en que no tenía un ordenador en casa y recuerdo empezar a hacer páginas web con frontPage en casa de mi vecino (nos pasabamos horas por la tarde investigando) y cada día ahorraba para poder tener mi propio pc.
            </p>
            <p>
              Lo mio siempre ha sido cacharrear con ordenadores, pero támbien desde pequeño disfruté mucho del dibujo, una actividad que en mi opinión esta muy relacionada con el desarrollo a la hora de crear, construir e ir viendo poco a poco el resultado de la obra.
            </p>
            <Flex alignX="right" className={styles.social}>
              <a href="https://github.com/pangeasi">GitHub</a>
              <a href="https://twitter.com/Danitiwt">Twitter</a>
              <a href="https://www.linkedin.com/in/dani-ballesteros/">Linkedin</a>
            </Flex>
          </Card.Content>
        </Card>
      </Box>
    </Layout>
  );
}
