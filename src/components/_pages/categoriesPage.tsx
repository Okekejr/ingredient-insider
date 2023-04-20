import { Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { CategoriesList } from "../categories";
import { SectionContainer } from "../layout/SectionContainer";

const CategoriesPage: FC = () => {
  return (
    <SectionContainer mt={{ base: "4.5rem", md: "3rem" }}>
      <Heading textAlign="center">Our Categories</Heading>
      <Flex
        gap={{ base: 4, md: 0 }}
        justifyContent="space-around"
        flexWrap="wrap"
        my={8}
      >
        <CategoriesList />
      </Flex>
    </SectionContainer>
  );
};

export default CategoriesPage;
