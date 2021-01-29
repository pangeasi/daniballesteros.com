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
      <Box hidden={!isHeader}>
        <Parallax y={[-10, 10]} tagOuter="figure" className="parallax">
          <Image
            width="100%"
            height="100vh"
            objectFit="cover"
            filter="opacity(90%)"
            src="/images/portal.jpg"
          />
        </Parallax>
        <Parallax y={[device, -3900]}>
          <Box alignX="center">
            <Heading {...headingAttributes}>Desarrollo web</Heading>
          </Box>
        </Parallax>
        <Parallax y={[device + 900, -1900]}>
          <Box alignX="center">
            <Heading {...headingAttributes}>diseño y más...</Heading>
          </Box>
        </Parallax>
      </Box>
      <Container breakpoint="desktop">
        <Head>
          <title>Mi web</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box padding="0.5rem">
          <Box marginTop={isHeader ? "20px" : "135px"}>{children}</Box>
        </Box>
      </Container>
    </>
  );
};
