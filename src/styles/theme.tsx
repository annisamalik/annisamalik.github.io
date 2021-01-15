import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
import { isWhiteSpaceLike } from "typescript";

const colors = {
  light_green: "#97F9C4",
  dark_green: "#4AD0A0",
  dark_brown: "#4D2A17",
  d_brown: "#A4713C",
  light_brown: "#BD8A3D",
  l_brown: "#D9AB66",
  creame: "#FFF0DA",
  creameContact: "#FFF9F0",
  l_br1: "#F4E2C8",
  l_br2: "#DFC195",
  l_br3: "#EDD6B5",
  dark_gray: "#C4C4C4",
  light_gray: "#E5E5E5",
  white: "#FFFFFF",
};

const fonts = {
  body: "'My Body Font', sans-serif",
  heading: "'My Heading Font', sans-serif",
  mono: "'My Monospaced Font', monospace",
  abril: "'Abril Fatface', cursive",
  quicksand: "'Quicksand', sans-serif",
  architect: "'Architects Daughter', cursive",
  lato: "'Lato', sans-serif",
};

const styles = {
  global: (props: String) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      backgroundImage: "url('/images/grid.png')",
      backgroundRepeat: "repeat",
      //bg: mode(colors.white, colors.d_brown)(props),
    },
    Navbar: {
      bg: mode(colors.white, colors.d_brown)(props),
    },
  }),
};

const components = {
  FormLabel: {
    baseStyle: {
      fontFamily: fonts.architect,
      color: colors.dark_brown,
    },
  },
  Tabs: {
    // style object for base or default style
    baseStyle: {
      tab: {
        _selected: { color: colors.light_brown },
        justifyContent: "flex-start",
        fontSize: "18px",
        color: "rgba(189,138,61,.5)",
        fontFamily: fonts.quicksand,
      },
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {},
    // default values for `size` and `variant`
    defaultProps: {
      size: "",
      variant: "",
    },
  },
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: (props: String) => ({
      dialog: {
        bg: mode("white", "#141214")(props),
      },
    }),
  },
  Button: {
    // 1. We can update the base styles
    baseStyle: {
      fontWeight: "bold", // Normally, it is "semibold"
      //bgGradient: "linear(to-tr, #4AD0A0, #97F9C4)",
      color: "white",
      cursor: "pointer",
      boxShadow: "0px 3px 3px rgba(151, 249, 196, 0.5)",
    },
    // 2. We can add a new button size or extend existing
    sizes: {
      xl: {
        h: "56px",
        fontSize: "lg",
        px: "32px",
      },
    },
    // 3. We can add a new visual variant
    variants: {
      "with-shadow": {
        bg: "black",
        boxShadow: "0 0 2px 2px #efdfde",
      },
      // 4. We can override existing variants
      solid: (props: String) => ({
        bgGradient: mode(
          "linear(to-tr, #4AD0A0, #97F9C4)",
          "linear(to-tr, #4AD0A0, #fff)"
        )(props),
      }),
    },
  },
};

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

const theme = extendTheme({
  components,
  styles,
  fonts,
  colors,
  config,
});

export default theme;
