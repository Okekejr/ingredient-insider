import { FC } from "react";
import { SectionContainer } from "../layout/SectionContainer";
import { ContainerProps, Heading, Text } from "@chakra-ui/react";
import { PopularMeals } from "./popularMeals";

export const PopularHero: FC<ContainerProps> = (props) => {
  return (
    <SectionContainer textAlign="center" {...props}>
      <Heading fontWeight="black" fontSize={{ base: "2.5rem", md: "3rem" }}>
        Popular Dishes
      </Heading>
      <Text
        fontSize={{ md: "1.2rem" }}
        as="p"
        mt={8}
        mb={12}
        mx="auto"
        w={{ md: "40rem" }}
      >
        we provide a variety of tasty dishes from different parts of the world
        including vegan dishes
      </Text>
      <PopularMeals />
    </SectionContainer>
  );
};
