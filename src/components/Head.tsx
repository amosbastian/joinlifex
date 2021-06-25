import { DefaultSeo } from "next-seo";
import NextHead from "next/head";
import type { NextSeoProps } from "next-seo";

export const SEO: NextSeoProps = {};

export const Head = () => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <NextHead>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </NextHead>
    </>
  );
};
