import { Layout } from "@/components/layout";
import theme from "@/theme";
import { FontFaces } from "@/theme/Fonts";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="ingredientinsider"
        titleTemplate="%s"
        description="Learn to cook popular dishes with their
        recipes"
      />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <FontFaces />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
