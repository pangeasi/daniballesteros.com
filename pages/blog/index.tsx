import { Box } from "bumbag";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components/layout/Layout";
import Link from "next/link";
import { Heading } from "bumbag";
import { useState } from "react";

// TODO: make a script to generate this (with github actions)
const lastArticles = [
  {
    slug: "como-implemetar-un-blog-con-markdown-y-nextjs",
    title: "¿Cómo implentar un blog con markdown y Next.js?",
    published: true,
  },
];

const Blog = () => {
  const [areArticles, setArticles] = useState(() =>
    lastArticles.some((article) => article.published)
  );
  console.log(areArticles);
  return (
    <Layout>
      <Box maxWidth="700px">
        <Heading use="h2" marginBottom="3rem">
          Últimos artículos 📚
        </Heading>
        {!areArticles ? (
          <p>No hay artículos todavía</p>
        ) : (
          lastArticles.map((article) => {
            return (
              article.published && (
                <Link href={`/blog/${article.slug}`} key={article.slug}>
                  <a>{article.title}</a>
                </Link>
              )
            );
          })
        )}
      </Box>
    </Layout>
  );
};

export default Blog;
