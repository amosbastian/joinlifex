import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export interface LinkProps extends ChakraLinkProps {
  children?: React.ReactNode;
  href: string;
}

export const Link = ({ children, href, variant, ...properties }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink colorScheme="primary" fontWeight="semibold" {...properties}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};
