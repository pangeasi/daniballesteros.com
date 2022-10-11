import Header from "./Header";
import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dani Ballesteros</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="z-10 bg-white relative">
        <main className="container mx-auto p-4 max-w-4xl">{children}</main>
      </div>
    </>
  );
};
