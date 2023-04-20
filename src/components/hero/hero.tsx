import {
  Flex,
  HStack,
  Heading,
  Text,
  Box,
  Image,
  ContainerProps,
} from "@chakra-ui/react";
import { FC } from "react";
import { SectionContainer } from "../layout/SectionContainer";
import { TextAnimation } from "../animate/textAnimation";
import { ButtonUtil } from "../button/button";

export const Hero: FC<ContainerProps> = (props) => {
  return (
    <SectionContainer mt={{ base: "4.5rem", md: "4.5rem" }} {...props}>
      <Flex flexDir={{ base: "column", lg: "row" }} alignItems="center">
        <Flex flexDirection="column" mb={{ base: 8, md: 12, lg: 0 }}>
          <Heading
            fontWeight="black"
            fontSize={{ base: "2.5rem", md: "3rem" }}
            w={{ md: "40rem" }}
          >
            Learn to cook popular dishes with their
            {
              <TextAnimation
                textShadow="-7px -5px #ffffff"
                bgGrad="linear(to-l, #FFEBEB, #6DA9E4, green.500)"
                text="recipes"
              />
            }
          </Heading>
          <Text fontSize={{ md: "1.2rem" }} as="p" my={8} w={{ md: "32rem" }}>
            Want to learn to cook your favourite dishes but dont know how to
            start? No need to worry again!
          </Text>
          <HStack mt={8} spacing={8}>
            <ButtonUtil
              title="Get Started"
              href="/search"
              bgColor="green.500"
              _hover={{ bgColor: "#6DA9E4", textDecor: "none" }}
            />
            <ButtonUtil
              title="Popular Dishes"
              borderColor="green.500"
              variant="outline"
              _hover={{ borderColor: "#6DA9E4", textDecor: "none" }}
            />
          </HStack>
        </Flex>
        <Box>
          <Image
            borderRadius="30px"
            src="/assets/img/Image.png"
            width={{ base: "22rem", md: "40rem" }}
            height={{ base: "17rem", md: "30rem" }}
            objectFit="cover"
            alt="pancake image with a recipe"
          />
        </Box>
      </Flex>
    </SectionContainer>
  );
};
