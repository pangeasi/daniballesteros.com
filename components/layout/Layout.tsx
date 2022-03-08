import { Header } from "./Header";
import Head from "next/head";
import { Container, Box, useColorMode, IconButton } from "@chakra-ui/react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

export const Layout = ({ children }) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box minH="calc(100vh - 20px)">
      <Header />
      <Head>
        <title>Dani Ballesteros - Desarrollador web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container mt={135} maxW="container.lg" centerContent>
        {children}
      </Container>
      <Box position="fixed" bottom={10} right={10}>
        <IconButton
          onClick={toggleColorMode}
          aria-label="dark mode"
          icon={colorMode === "dark" ? <RiSunFill /> : <RiMoonClearFill />}
        />
      </Box>
    </Box>
  );
};
