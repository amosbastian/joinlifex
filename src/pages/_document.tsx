import { ColorModeScript } from "@chakra-ui/react";
import { createResolver } from "next-slicezone/resolver";
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    await createResolver();
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
