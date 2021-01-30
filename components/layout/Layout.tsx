import { Header } from "./Header";
import Head from "next/head";
import {
  Container,
  Box
} from "bumbag";

export const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <Container breakpoint="desktop">
        <Head>
          <title>Dani Ballesteros - Desarrollador web</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box padding="0.5rem">
          <Box marginTop="135px">{children}</Box>
        </Box>
      </Container>
    </>
  );
};
