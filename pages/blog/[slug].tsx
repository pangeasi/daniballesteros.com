import { As, Box, Heading, Link, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components/layout/Layout";
import { useMarkdown } from "../../hooks/useMarkdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useRouter } from "next/router";
import { RiExternalLinkFill } from "react-icons/ri";

const Article = () => {
  const { slug } = useRouter().query;
  const markdown = useMarkdown(slug);

  const renderers = {
    code: ({ language, value }) => {
      return <SyntaxHighlighter language={language} children={value} />;
    },
    paragraph: ({ children }) => {
      return <Text marginY={5}>{children}</Text>;
    },
    link: ({ children }) => {
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
    heading: ({ children, level }) => {
      return (
        <Heading
          as={("h" + level) as As<any>}
          marginY={7}
          fontSize={34 - level * 3}
        >
          {children}
        </Heading>
      );
    },
  };
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
          <ReactMarkdown renderers={renderers}>
            {markdown?.content}
          </ReactMarkdown>
        </Box>
      )}
    </Layout>
  );
};

export default Article;
