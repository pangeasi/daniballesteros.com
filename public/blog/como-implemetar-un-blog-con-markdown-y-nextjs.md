---
title: ¿Cómo implentar un blog con markdown y Next.js?
date: 01/30/2021
tags: markdown, next.js, blog, react
catergory: desarrollo web
published: false
---

Que mejor manera de inagurar el blog que el primer artículo que publico sea sobre como implemetarlo en esta web que esta desarrollada con Next.js. Pues bien, mi idea es utlizar Markdown para crear el contenido y mostrarlo con react de manera totalmente estática, con esto ganamos una mayor velocidad y nos ahorramos la parte del servidor o lo que sería un headless CMS, como puede ser wordpress.

Trataré de hacer una primera vista de lo que vamos a desarrollar. Como creadores tendremos nuestro directorio en que que iremos almacenando los articulos en formato Markdown (.md) esto es un lenguaje de marcado muy sencillo, pero que ademas soporta etiquetas html. Por otro lado desarrollaremos lo que sería dos páginas, una sería la entrada del blog en la cuál estarian los artículos y la segunda que se mostraría el contenido de un artículo.

## Lo primero: Instalar react-markdown y react-syntax-highlighter

```bash
npm install react-markdown
```

```bash
npm install react-syntax-highlighter
```

Estas librerias nos hará facilitará mucho el proceso, pues no hay que reinventar la rueda. react-markdown nos brinda la posibilidad de transformar un string con formato markdown a etiquetas html y renderizarlo para react y react-syntax-highlighter nos ofrece soporte para dar estilo a lenguajes en la etiqueta `code` algo fundamental como desarrolladores tenerlo en nuestro contenido.

## Estructura de las páginas

Como ya dijé, tendremos dos páginas, una para el indice del blog y otra para los artículos, la primera será una ruta estática y la otra dinámica.

![estructura de páginas](/images/blog/como-implemetar-un-blog-con-markdown-y-nextjs/estructura_paginas.png)
