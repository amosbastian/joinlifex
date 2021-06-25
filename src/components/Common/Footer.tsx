import type { BoxProps } from "@chakra-ui/react";
import {
  Box,
  Divider,
  Flex,
  Grid,
  HStack,
  Icon,
  Link as ChakraLink,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "./Link";

interface FooterListProperties {
  heading: string;
  items: { href: string; label: string }[];
}

const FooterList = ({ heading, items }: FooterListProperties) => {
  const hoverColor = useColorModeValue("primary.600", "primary.200");

  return (
    <Flex flexDirection="column">
      <Text color="white" opacity={0.5} fontSize="md" mb={6}>
        {heading}
      </Text>
      <List>
        {items.map(({ href, label }, index) => (
          <ListItem key={label} mb={index === items.length ? 0 : 2}>
            <Link href={href} fontWeight="500" fontSize="md" _hover={{ color: hoverColor }}>
              {label}
            </Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

const FOOTER_LIST_ITEMS: FooterListProperties[] = [
  {
    heading: "Product",
    items: [
      { href: "#", label: "For individuals" },
      { href: "#", label: "For companies" },
      { href: "#", label: "For landlords" },
    ],
  },
  {
    heading: "Company",
    items: [
      { href: "#", label: "About LifeX" },
      { href: "#", label: "Co-living" },
      { href: "#", label: "FAQs" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Contact" },
      { href: "#", label: "Press kit" },
    ],
  },
  {
    heading: "Cities",
    items: [
      { href: "#", label: "Berlin" },
      { href: "#", label: "Copenhagen" },
      { href: "#", label: "London" },
      { href: "#", label: "Munich" },
      { href: "#", label: "Paris" },
      { href: "#", label: "Brussels" },
    ],
  },
  {
    heading: "Guides",
    items: [
      { href: "#", label: "Moving to Berlin" },
      { href: "#", label: "Moving to Copenhagen" },
      { href: "#", label: "Moving to London" },
      { href: "#", label: "Moving to Munich" },
      { href: "#", label: "Moving to Paris" },
      { href: "#", label: "Moving to Brussels" },
    ],
  },
];

export const Footer = (props: BoxProps) => {
  return (
    <Box as="footer" backgroundColor="#5D6857" {...props} color="white">
      <Grid
        templateColumns={{ base: "1fr", md: "14em 1fr" }}
        px={{ base: 4, sm: 20 }}
        maxW="1400px"
        m="0 auto"
        gap={{ base: 6, sm: 12 }}
        justifyContent="space-between"
      >
        <Box py={10}>
          <Box mb={8}>LOGO</Box>
          <Text>LifeX ApS</Text>
          <Text>Skelbækgade 2, 6.</Text>
          <Text>1717 Copenhagen V</Text>
          <Text mb={10}>CVR: 38502824</Text>
          <Box mb={4}>
            <Link href="#" fontWeight="normal" fontSize="sm">
              Privacy Policy
            </Link>
          </Box>
          <Box>
            <Link href="#" fontWeight="normal" fontSize="sm">
              Cookie Policy
            </Link>
          </Box>
        </Box>
        <Grid
          py={10}
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(4, 1fr)",
          }}
          gap={{ base: 6, sm: 12 }}
        >
          {FOOTER_LIST_ITEMS.map((listItem, index) => {
            return <FooterList key={index} heading={listItem.heading} items={listItem.items} />;
          })}
        </Grid>
        <Divider gridColumn="1 / -1" color="white" opacity={0.2} />
      </Grid>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW="1400px"
        m="0 auto"
        px={{ base: 4, sm: 20 }}
        py={10}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Text color="white" opacity={0.5} mb={{ base: 7, sm: 0 }}>
          Made with ❤️ in Copenhagen
        </Text>
        <HStack spacing={4}>
          <ChakraLink aria-label="Instagram" variant="link" href="https://www.instagram.com/amosbastian" isExternal>
            <Icon color="white" opacity={0.5} as={FaInstagram} />
          </ChakraLink>
          <ChakraLink aria-label="FaFacebook" variant="link" href="https://twitter.com/amosbastian" isExternal>
            <Icon color="white" opacity={0.5} as={FaFacebook} />
          </ChakraLink>
          <ChakraLink aria-label="GitHub" variant="link" href="https://linkedin.com/in/amosbastian" isExternal>
            <Icon color="white" opacity={0.5} as={FaLinkedin} />
          </ChakraLink>
          <ChakraLink aria-label="GitHub" variant="link" href="https://linkedin.com/in/amosbastian" isExternal>
            <Icon color="white" opacity={0.5} as={FaYoutube} />
          </ChakraLink>
        </HStack>
      </Flex>
    </Box>
  );
};
