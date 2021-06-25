import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { RichText } from "prismic-reactjs";
import React from "react";

interface PerkCardProps {
  image: any;
  title: any;
  description: any;
}

export const PerkCard = ({ description, title, image }: PerkCardProps) => {
  return (
    <Box borderRadius="md" overflow="hidden" bg="white">
      <Image h="160px" w="100%" objectFit="cover" src={image.url} alt={image.alt} />
      <Box p={10}>
        <Text as="h3" mb={4} fontSize="18px" fontFamily="Inter" fontWeight="500">
          <RichText render={title} />
        </Text>
        <Text fontSize="md">
          <RichText render={description} />
        </Text>
      </Box>
    </Box>
  );
};
