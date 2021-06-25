import { Page } from "@/types/page";
import { Box } from "@chakra-ui/react";
import { Footer, Header } from "./Common";

interface LayoutPropps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutPropps) => {
  return (
    <Box bg="white">
      <Header />
      <Box as="main" minHeight="100vh">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export const getLayout = (page: Page<unknown>) => <Layout>{page}</Layout>;
