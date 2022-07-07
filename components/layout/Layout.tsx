import Header from "./Header";
import Head from "next/head";
import { Container, Box, useColorMode, IconButton } from "@chakra-ui/react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: -200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export const Layout = ({ children }) => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <Header />
      <Box mt={24}>
        <Head>
          <title>Dani Ballesteros - Desarrollador web</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container
          as={motion.main}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear" }}
          mt={10}
          maxW="container.lg"
          centerContent
        >
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
    </>
  );
};
