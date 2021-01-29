import Head from "next/head";
import "../styles/Home.module.scss";
import { Layout } from "../components/layout/Layout";
import { Box, Flex, Image, Card } from "bumbag";

export default function Home() {
  return (
    <Layout>
      <Card marginBottom="200px">
        <Card.Header>
          <Card.Title>¿Quien soy?</Card.Title>
        </Card.Header>
        <Card.Content>
          ¡Hola! soy Dani Ballesteros, desarrollador web especializado en
          aplicaciones web. Mi carreara a rodado entre la tecnología y las artes
          plásticas.
        </Card.Content>
      </Card>
    </Layout>
  );
}
