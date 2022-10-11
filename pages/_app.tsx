import { extendTheme } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/global.css";
const theme = extendTheme({
  fonts: {
    body: "Montserrat",
    heading: "Montserrat",
  },
});

const MyApp = ({ Component, pageProps }) => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </QueryClientProvider>
  );
};

export default MyApp;
