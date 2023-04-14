import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { fonts } from "./Fonts";

export const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts,
  sizes: {
    container: {
      xl: "1448px",
    },
  },
});

export default theme;
