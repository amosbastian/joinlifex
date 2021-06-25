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
      </NextHead>
    </>
  );
};
