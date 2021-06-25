import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export const PageSection = ({ children, ...rest }: BoxProps) => {
  return (
    <Box as="section" {...rest} px={20} py={35}>
      {children}
    </Box>
  );
};
