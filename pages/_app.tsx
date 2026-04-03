import type { AppProps } from "next/app";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "../styles/global.css";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [client] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <AnimatePresence>
        <Component {...pageProps} />
        <ToastContainer theme="colored" autoClose={7000} />
      </AnimatePresence>
    </QueryClientProvider>
  );
};

export default MyApp;
