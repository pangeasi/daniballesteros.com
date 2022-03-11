import { ChakraProvider, extendTheme } from "@chakra-ui/react";
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
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
