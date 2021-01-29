import "../styles/globals.scss";
import { Provider as BumbagProvider, ThemeConfig, ToastManager } from "bumbag";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { ParallaxProvider } from "react-scroll-parallax";

const theme: ThemeConfig = {
  Heading: {
    defaultProps: {
      fontFamily: "Montserrat-SemiBold",
    },
  },
  Icon: {
    iconSets: [
      {
        icons: [faLaptopCode],
        prefix: "solid-",
        type: "font-awesome",
      },
    ],
  },
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <BumbagProvider theme={theme} isSSR>
      <ParallaxProvider>
        <Component {...pageProps} />
        <ToastManager />
      </ParallaxProvider>
    </BumbagProvider>
  );
};

export default MyApp;
