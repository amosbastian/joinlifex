import { Avatar, Box, Text } from "@chakra-ui/react";
import { RichText } from "prismic-reactjs";
import * as React from "react";

interface TestimonialCardProps {
  image: any;
  quote: any;
  name: any;
  role: any;
}

export const TestimonialCard = ({ image, quote, name, role }: TestimonialCardProps) => {
  return (
    <Box borderRadius="md" bg="#F8F3ED" p={10}>
      <Text as="div" mb={8} fontSize="18px" fontStyle="italic">
        <RichText render={quote} />
      </Text>
      <Box display="flex" alignItems="center">
        <Avatar h={14} w={14} name={name.text} src={image.url} alt={image.alt} />
        <Box ml={4}>
          <Text as="div" fontWeight="500">
            <RichText render={name} />
          </Text>
          <Text as="div" color="#908E87">
            <RichText render={role} />
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
