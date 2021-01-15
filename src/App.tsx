import * as React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

import themes from "./styles/theme";
import fonts from "./styles/font-face";
import { Global } from "@emotion/react";
import { Footer } from "./pages/Footer";

export const App = () => (
  <ChakraProvider theme={themes}>
    <ColorModeScript initialColorMode="light" />
    <Global styles={fonts} />
    <Navbar></Navbar>
    <Footer></Footer>
  </ChakraProvider>
);
