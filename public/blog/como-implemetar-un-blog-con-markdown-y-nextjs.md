---
title: ¿Cómo implentar un blog con markdown y Next.js?
date: 01/30/2021
tags: markdown, next.js, blog, react
catergory: desarrollo web
published: true
---

Que mejor manera de inagurar el blog que el primer artículo que publico sea sobre como implemetarlo en esta web que esta desarrollada con Next.js. Pues bien, mi idea es utlizar Markdown para crear el contenido y mostrarlo con react de manera totalmente estática, con esto ganamos una **mayor velocidad** y nos **ahorramos la parte del servidor** o lo que sería un headless CMS, como puede ser wordpress.

Trataré de hacer una primera vista de lo que vamos a desarrollar. Como creadores tendremos nuestro directorio en que que iremos almacenando los articulos en formato Markdown (.md) esto es un lenguaje de marcado muy sencillo, pero que ademas soporta etiquetas html. Por otro lado desarrollaremos lo que sería dos páginas, una sería la entrada del blog en la cuál estarian los artículos y la segunda que se mostraría el contenido de un artículo.

## Lo primero: Instalar react-markdown y react-syntax-highlighter

```bash
npm install react-markdown
```

```bash
npm install react-syntax-highlighter
```

Estas librerias nos hará facilitará mucho el proceso, pues no hay que reinventar la rueda. react-markdown nos brinda la posibilidad de transformar un string con formato markdown a etiquetas html y renderizarlo para react y react-syntax-highlighter nos ofrece soporte para dar estilo a lenguajes en la etiqueta `code` algo fundamental que como desarrolladores lo tengamos en nuestro contenido.

## Estructura de las páginas

Como ya dijé, tendremos dos páginas, una para el indice del blog y otra para los artículos, la primera será una ruta estática y la otra dinámica.

![estructura de páginas](/images/blog/como-implemetar-un-blog-con-markdown-y-nextjs/estructura_paginas.png)

[Las rutas dinámicas en Next.js](https://nextjs.org/docs/routing/dynamic-routes) se resuelven poniendo entre corchetes el parametro deseado y con `useRouter().query` lo capturaremos.

## Creando nuestro primer artículo

Ahora podemos crear nuestro primer artículo, es importarte guardarlo en la carpeta public que genera Next.js para servir todos los recursos estáticos, de esta manera podremos solicitarlos con `fetch()` desde nuestro componente.

Yo he creado una carpeta `blog` pero puedes llamarla como quieras (ej: articles) o crear subcarpetas si así lo deseas para tenerlo mejor organizado.

![carpeta donde estan los artículos](/images/blog/como-implemetar-un-blog-con-markdown-y-nextjs/carpeta_articulos.png)

Al lio, el contenido de nuestro archivo `.md` tendra dos partes, una de ellas sera la información del propio artículo que será oculta para el visitante y la otra parte es el contenido propio de él.

![ejemplo de markdown del primer artículo](/images/blog/como-implemetar-un-blog-con-markdown-y-nextjs/markdown_primer_articulo.png)

La información debe ir rodeada de tres guiones medios al principio y al final, luego los detalles se añaden con clave y valor de este modo: `title: Hola mundo!`

## Llego el momento del código

### Código de la página del artículo

`/pages/blog/[slug].tsx`

```tsx
const Article = () => {
  const { slug } = useRouter().query; // conseguimos el slug del parametro que nos llega por query
  const markdown = useMarkdown(slug);

  // Esta es la parte de react-syntax-highlighter
  const renderers = {
    code: ({ language, value }) => {
      return <SyntaxHighlighter language={language} children={value} />;
    },
  };

  // Renderizamos el contenido de la página de un artículo
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
```

### Custom hook para convertir el markdown

`/hooks/useMarkdown.ts`

```ts
export const useMarkdown = (slug) => {
  const [markdown, setMarkdown] = useState<{
    content: string;
    details: MarkdownDetails;
  }>();
  useEffect(() => {
    let isCancelled = false;
    slug &&
      fetch(`/blog/${slug}.md`)
        .then((res) => res.text())
        .then((data) => !isCancelled && setMarkdown(getMarkdown(data)));
    return () => (isCancelled = true);
  }, [slug]);
  return markdown;
};
```

### Helpers

`/helpers/utlis.ts`

```ts
// parseValue() nos devuelve el valor transformado correctamente
const parseValue = (key: string, value: string) => {
  value = value.trim();
  switch (key) {
    case "published":
      return value === "true";
    case "date":
      return new Date(value);
    case "tags":
      return value.split(",");
    default:
      return value;
  }
};

export const getMarkdown = (data) => {
  let details: MarkdownDetails = {};
  let content: string;

  const detailsFounded = data.match(/---([^---]+)---/)[0]; // Encontramos la información del artículo con esta regex

  detailsFounded
    .split("\n") // por cada salto de linea creamos un array
    .slice(1, -1) // nos quedamos con los elementos del array correctos, eliminamos los guiones medios que estan en la primera y última posición
    .forEach((l) => {
      let key = l.split(":")[0];
      let value = l.split(":")[1];
      details[key] = parseValue(key, value); // recorremos cada clave/valor y se lo asignamos al objeto definido
    });
  content = data.replace(detailsFounded, ""); // Eliminamos la información de la data (información y contenido) y nos quedamos solo con el contenido

  return { content, details };
};
```

### Página del indice del blog

`/pages/blog/index.tsx`

```tsx
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
```
