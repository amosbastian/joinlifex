import { PageSection } from "../../src/components/Common";
import { PerkCard, OtherPerks } from "../../src/components/Perks";
import { Heading, Text, Grid } from "@chakra-ui/react";
import { RichText } from "prismic-reactjs";
import React from "react";

const PerksSlice = ({ slice }: any) => (
  <PageSection bg="#F8F3ED">
    <Heading size="xl" maxW="2xl" mb={6}>
      {slice.primary.title ? <RichText render={slice.primary.title} /> : <h2>Template slice, update me!</h2>}
    </Heading>
    {slice.primary.description && (
      <Text as="div" fontSize="lg" maxW="3xl" mb={10}>
        <RichText render={slice.primary.description} />
      </Text>
    )}
    <Grid gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }} gap={4}>
      {(slice?.items as any[])?.map((item, i) => (
        <PerkCard key={i} description={item.description} title={item.title} image={item.image} />
      ))}
    </Grid>
    {slice.primary.perks && slice.primary.otherPerksTitle && (
      <OtherPerks title={slice.primary.otherPerksTitle} perks={slice.primary.perks.split(",")} />
    )}
  </PageSection>
);

export default PerksSlice;
