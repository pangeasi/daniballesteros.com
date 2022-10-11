import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "../styles/global.css";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }) => {
  const client = new QueryClient();
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
