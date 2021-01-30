import { Box } from "bumbag";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../components/layout/Layout";
import { useMarkdown } from "../hooks/useMarkdown";


const Blog = () => {
  const markdown = useMarkdown()
  return <Layout>
    {markdown?.frontmatter.published && 
    <Box maxWidth="700px">
      <h1>{markdown.frontmatter.title}</h1>
      <time>{Intl.DateTimeFormat('es', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(markdown.frontmatter.date)}</time>
      <ReactMarkdown>
        {markdown?.content}
      </ReactMarkdown>
    </Box>
    }
    
  </Layout>;
};

export default Blog;
