import { extendTheme } from "@chakra-ui/react";
import { foundations } from "./foundations";

const overrides = {
  ...foundations,
};

export const theme = extendTheme(overrides);
