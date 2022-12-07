import {
  Box,
  ChakraProvider,
  extendTheme,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { Footer, NavigationBar } from "../constants/components/utilities/";
import "../styles/globals.css";
import "@fontsource/poppins";
import NextNProgress from "nextjs-progressbar";
import { useWindowSize } from "../custom_hooks";

import { startUpStore } from "../store/start_up";
import { useEffect } from "react";
import { MotionFlex } from "../constants/components/motion";

function MyApp({ Component, pageProps }) {
  const bg = useColorModeValue("white", "#131313");
  const theme = extendTheme({
    colors: {
      brand: {
        50: "#ddfbfe",
        100: "#bbedf0",
        200: "#97dee4",
        300: "#70d0d9 ",
        400: "#4bc2cd",
        500: "#32a9b4",
        600: "#22838d",
        700: "#125f65",
        800: "#01393e",
        900: "#000000", //474747
      },
    },
    fonts: {
      heading: `Poppins`,
      body: `Poppins`,
    },
    config: {
      useSystemColorMode: false,
      initialColorMode: "light",
    },
  });

  useEffect(() => {
    window.localStorage.clear();
  }, []);
  const getshowStartup = startUpStore((state) => state.show_startup);
  const { height, width } = useWindowSize();

  return (
    <ChakraProvider theme={theme}>
      <Flex
        alignItems={"stretch"}
        flexDirection={"column"}
        style={{ overflowX: "hidden" }}
      >
        {!getshowStartup && (
          <MotionFlex
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ ease: "easeIn", duration: 10 }}
            zIndex={20}
          >
            <NavigationBar />
          </MotionFlex>
        )}

        <Component {...pageProps} />
        {!getshowStartup && <Footer />}
        <NextNProgress height={5} color="#22C086" />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
