import {
  Box,
  Flex,
  HStack,
  Spacer,
  Link,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { Logo } from "../svgs/Logo";
import NextLink from "next/link";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

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
export const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex m={5}>
      <Box>
        <NextLink href="/">
          <a>
            <Logo size={50} color={colorMode === "dark" ? "#fff" : "#0b373a"} />
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
    </Flex>
  );
};
