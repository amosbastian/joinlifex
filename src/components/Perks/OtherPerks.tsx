import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { RichText, RichTextBlock } from "prismic-reactjs";
import * as React from "react";

interface OtherPerksProps {
  title: RichTextBlock[];
  perks: string[];
}

export const OtherPerks = ({ title, perks }: OtherPerksProps) => {
  return (
    <Box borderRadius="md" bg="white" p={10} mt={4}>
      <Text as="h4" mb={6} fontSize="md" fontWeight="500">
        <RichText render={title} />
      </Text>
      <Wrap direction={["column", "row"]} spacing={5} shouldWrapChildren>
        {perks.map((perk) => {
          return (
            <WrapItem px={3} py={2} fontWeight="500" borderRadius="sm" maxW="max-content" bg="#E9E8E7" fontSize="sm">
              {perk}
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
};
