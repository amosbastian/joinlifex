import { Head } from "@/components/Head";
import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import type { AppProps } from "next/app";
import React from "react";
import type { Page } from "../types/page";

type Properties = AppProps & {
  Component: Page<unknown>;
};

function MyApp({ Component, pageProps }: Properties) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Head />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;
