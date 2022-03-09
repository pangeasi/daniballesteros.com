import { As, Box, Code, Heading, Link, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components/layout/Layout";
import { useMarkdown } from "../../hooks/useMarkdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useRouter } from "next/router";
import { RiExternalLinkFill } from "react-icons/ri";

const Article = () => {
  const { slug } = useRouter().query;
  const markdown = useMarkdown(slug);

  return (
    <Layout>
      {markdown?.details.published && (
        <Box maxWidth="700px">
          <Heading as="h2">{markdown.details.title}</Heading>
          <Box marginY={5} color="blackAlpha.700">
            <time>
              {Intl.DateTimeFormat("es", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(markdown.details.date)}
            </time>
          </Box>
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <Code padding={1} className={className} {...props}>
                    {children}
                  </Code>
                );
              },
              link({ children }) {
                return (
                  <Link
                    isExternal
                    display="inline-flex"
                    alignItems="center"
                    color="blue.600"
                    gap={1}
                  >
                    {children} <RiExternalLinkFill />
                  </Link>
                );
              },
              p({ children }) {
                return <Text marginY={5}>{children}</Text>;
              },
              h1({ children }) {
                return (
                  <Heading as="h1" marginY={7} fontSize={36}>
                    {children}
                  </Heading>
                );
              },
              h2({ children }) {
                return (
                  <Heading as="h2" marginY={7} fontSize={30}>
                    {children}
                  </Heading>
                );
              },
              h3({ children }) {
                return (
                  <Heading as="h3" marginY={7} fontSize={24}>
                    {children}
                  </Heading>
                );
              },
              h4({ children }) {
                return (
                  <Heading as="h4" marginY={7} fontSize={20}>
                    {children}
                  </Heading>
                );
              },
              h5({ children }) {
                return (
                  <Heading as="h5" marginY={7} fontSize={18}>
                    {children}
                  </Heading>
                );
              },
              h6({ children }) {
                return (
                  <Heading as="h6" marginY={7} fontSize={14}>
                    {children}
                  </Heading>
                );
              },
            }}
          >
            {markdown?.content}
          </ReactMarkdown>
        </Box>
      )}
    </Layout>
  );
};

export default Article;
