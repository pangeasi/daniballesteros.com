import { Header } from "./Header";
import Head from "next/head";
import {
  Container,
  Box,
  Image,
  Hide,
  Heading,
  useBreakpoint,
  useBreakpointValue,
} from "bumbag";
import { useIsHeader } from "../../hooks/useIsHeader";
import { Parallax } from "react-scroll-parallax";
import { useMediaDevices } from "react-use";

const headingAttributes = {
  use: "h1",
  fontSize: "900",
  color: "white",
  textAlign: "center",
  paddingX: "0.8rem",
  maxWidth: "750px",
};
export const Layout = ({ children }) => {
  const isHeader = useIsHeader();
  const device = useBreakpointValue({
    default: -300,
    "min-desktop": -1000,
    tablet: -850,
    mobile: -700,
  });
  return (
    <>
      <Header />
      <Container breakpoint="desktop">
        <Head>
          <title>Mi web</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box padding="0.5rem">
          <Box marginTop="135px">{children}</Box>
        </Box>
      </Container>
    </>
  );
};
