import {
  Button,
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

export const Hero: FC<ContainerProps> = (props) => {
  return (
    <SectionContainer {...props}>
      <Flex
        flexDir={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
        alignItems="center"
      >
        <Flex flexDirection="column">
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
            <Button bgColor="green.500" height="50px" width="150px">
              Get Started
            </Button>
            <Button
              borderColor="green.500"
              height="50px"
              width="150px"
              variant="outline"
            >
              Popular Dishes
            </Button>
          </HStack>
        </Flex>
        <Box mb={{ base: 12, md: 0 }}>
          <Image
            borderRadius="30px"
            src="/assets/img/Image.png"
            objectFit="cover"
            alt=""
          />
        </Box>
      </Flex>
    </SectionContainer>
  );
};
