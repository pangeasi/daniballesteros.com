import {
  Box,
  Flex,
  HStack,
  Spacer,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { Logo } from "../svgs/Logo";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import { useIsScrolledHeader } from "../../hooks/useIsScrolledHeader";
import { motion } from "framer-motion";

const menus = [
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contacto",
    link: "/contact",
  },
  {
    title: "Proyectos",
    link: "/projects",
  },
];
const Header = () => {
  const { colorMode } = useColorMode();
  const isScrolling = useIsScrolledHeader();

  const MotionLogo = motion(Logo);
  const MotionFlex = motion(Flex);
  const variantsLogo = {
    normal: {
      scale: 1,
      rotate: ["0deg", "30deg", "-30deg", "0deg"],
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    small: { scale: 0.5, translateY: -12 },
  };
  const variantsHeader = {
    normal: {
      height: "auto",
    },
    small: {
      height: "40px",
    },
  };

  return (
    <MotionFlex
      position="fixed"
      animate={isScrolling ? "small" : "normal"}
      variants={variantsHeader}
      top={0}
      w="full"
      bg={colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800"}
    >
      <Box p={2}>
        <NextLink href="/">
          <a>
            <MotionLogo
              animate={isScrolling ? "small" : "normal"}
              variants={variantsLogo}
              whileTap={{ scale: 0.9 }}
              size={50}
              color={colorMode === "dark" ? "#fff" : "#0b373a"}
            />
          </a>
        </NextLink>
      </Box>
      <Spacer />
      <HStack spacing={6} mr={6}>
        {menus.map((menu) => (
          <NextLink key={menu.title} href={menu.link} passHref>
            <Link fontWeight="bold">{menu.title}</Link>
          </NextLink>
        ))}
      </HStack>
    </MotionFlex>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
