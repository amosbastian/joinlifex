import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Container } from "./Container";

export const PageSection = ({ children, ...rest }: BoxProps) => {
  return (
    <Box as="section" {...rest} px={{ base: 4, sm: 20 }} py={{ base: 20, sm: 36 }}>
      <Container>{children}</Container>
    </Box>
  );
};
