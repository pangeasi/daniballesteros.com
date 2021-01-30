import { Box } from "bumbag";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components/layout/Layout";
import { useMarkdown } from "../../hooks/useMarkdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useRouter } from "next/router";

const Article = () => {
  const { slug } = useRouter().query;
  const markdown = useMarkdown(slug);

  const renderers = {
    code: ({ language, value }) => {
      return <SyntaxHighlighter language={language} children={value} />;
    },
  };
  return (
    <Layout>
      {markdown?.details.published && (
        <Box maxWidth="700px">
          <h1>{markdown.details.title}</h1>
          <time>
            {Intl.DateTimeFormat("es", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(markdown.details.date)}
          </time>
          <ReactMarkdown renderers={renderers}>
            {markdown?.content}
          </ReactMarkdown>
        </Box>
      )}
    </Layout>
  );
};

export default Article;
