import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Layout } from "../components/layout/Layout";
import { Box, Flex, Image, Card } from "bumbag";

export default function Home() {
  return (
    <Layout>
      <Card marginBottom="200px">
        <Card.Header>
          <Card.Title>¿Quién soy?</Card.Title>
        </Card.Header>
        <Card.Content>
          ¡Hola! 👋 soy Dani Ballesteros, desarrollador web especializado en hacer
          aplicaciones web. Me reinvente hace unos años y pienso desde entonces que he encontrado mi pasión, es esto lo que me gusta hacer, pues es mi trabajo y a la vez mi afición. Provengo del mundo de las artes plásticas, además siempre me gusto andar entre ordenadores.
        </Card.Content>
      </Card>
    </Layout>
  );
}
