import { Button, ButtonGroup, Flex, Heading, Icon, IconButton, Text } from "@chakra-ui/react";
import { RichText } from "prismic-reactjs";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const BannerSlice = ({ slice }: any) => {
  return (
    <Flex
      as="section"
      h={{ base: "604px", sm: "700px" }}
      w="100vw"
      backgroundImage={slice.primary.image.url}
      justifyContent="center"
      flexDirection="column"
      px={20}
    >
      <Heading color="white" size="3xl" maxW="2xl" mb={6}>
        {slice.primary.title ? <RichText render={slice.primary.title} /> : <h2>Template slice, update me!</h2>}
      </Heading>
      {slice.primary.description && (
        <Text as="span" color="white" fontSize="lg" maxW="lg" mb={10}>
          <RichText render={slice.primary.description} />
        </Text>
      )}
      <ButtonGroup isAttached overflow="hidden">
        <Button borderRadius="sm" maxW="max-content" mr="-px">
          {slice.primary.buttonLabel}
        </Button>
        <IconButton
          borderLeftWidth="1px"
          borderLeftColor="blackAlpha.900"
          borderRadius="sm"
          aria-label="Select city"
          icon={<Icon as={RiArrowDownSLine} />}
        />
      </ButtonGroup>
    </Flex>
  );
};

export default BannerSlice;
