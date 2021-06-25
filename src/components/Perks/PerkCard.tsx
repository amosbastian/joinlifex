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
        <Heading as="h3" mb={4} fontSize="18px">
          <RichText render={title} />
        </Heading>
        <Text fontSize="18px">
          <RichText render={description} />
        </Text>
      </Box>
    </Box>
  );
};
