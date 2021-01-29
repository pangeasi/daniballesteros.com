import { Box, Flex, Navigation, List } from "bumbag";
import { Logo } from "../svgs/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useIsHeader } from "../../hooks/useIsHeader";
import { useWindowScroll } from "react-use";

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
  const isHeader = useIsHeader();
  const { y } = useWindowScroll();
  const isSmallHeader = y > 50;
  return (
    <Flex
      className={isSmallHeader ? "smallHeader" : "header"}
      justifyContent="space-between"
    >
      <Box>
        <Link href="/">
          <a>
            <Logo
              size={isSmallHeader ? 40 : 100}
              color={isHeader && !isSmallHeader ? "#ffffff" : "#0b373a"}
            />
          </a>
        </Link>
      </Box>
      <Navigation alignY="center">
        <List orientation="horizontal" paddingRight="2rem">
          {menus.map((menu) => (
            <List.Item key={menu.title}>
              <Link href={menu.link}>
                <a
                  {...(isHeader &&
                    !isSmallHeader && { className: "header-anchor" })}
                >
                  {menu.title}
                </a>
              </Link>
            </List.Item>
          ))}
        </List>
      </Navigation>
    </Flex>
  );
};
