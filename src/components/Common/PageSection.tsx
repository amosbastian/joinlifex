import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Container } from "./Container";

export const PageSection = ({ children, ...rest }: BoxProps) => {
  return (
    <Box as="section" {...rest} px={20} py={36}>
      <Container>{children}</Container>
    </Box>
  );
};
