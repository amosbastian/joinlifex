import { TestimonialCard } from "../../src/components/Testimonials";
import { Grid, Heading, Text } from "@chakra-ui/react";
import { RichText } from "prismic-reactjs";
import React from "react";
import { PageSection } from "../../src/components/Common";

const TestmonialsSlice = ({ slice }: any) => (
  <PageSection bg="white">
    <Heading size="xl" maxW="2xl" mb={6}>
      {slice.primary.title ? <RichText render={slice.primary.title} /> : <h2>Template slice, update me!</h2>}
    </Heading>
    {slice.primary.description && (
      <Text as="div" fontSize="lg" maxW="3xl" mb={10}>
        <RichText render={slice.primary.description} />
      </Text>
    )}
    <Grid gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
      {(slice?.items as any[])?.map((item, i) => (
        <TestimonialCard key={i} image={item.image} name={item.name} role={item.role} quote={item.quote} />
      ))}
    </Grid>
  </PageSection>
);

export default TestmonialsSlice;
