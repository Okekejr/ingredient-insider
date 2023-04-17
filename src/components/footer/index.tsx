import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { Copyright } from "./Copyright";
import { Mail } from "iconoir-react";

export const Footer: FC<BoxProps> = (props) => {
  return (
    <Box
      backgroundImage="/assets/img/footer1.svg"
      backgroundSize="cover"
      borderRadius="50px"
      color="black"
      display="flex"
      flexDir="column"
      m="auto"
      h={{ base: "25rem", md: "30rem" }}
      pt={{ base: 4, md: 16 }}
      p={4}
      w={{ base: "100%", lg: "85%" }}
      {...props}
    >
      <Heading
        fontSize={{ base: "1.5rem", md: "3rem" }}
        textAlign="center"
        mx="auto"
        mt={{ base: "1.5rem", md: "2.5rem" }}
        w={{ md: "40rem" }}
      >
        Subscribe to get weekly recipe updates
      </Heading>

      <InputGroup size="lg" my={8} mx="auto" w={{ base: "", md: "lg" }}>
        <InputLeftElement
          pointerEvents="none"
          children={<Mail color="gray.300" />}
        />
        <Input
          borderColor="black"
          pr="4.5rem"
          type="email"
          placeholder="Enter your email"
          _placeholder={{ color: "inherit" }}
        />
        <InputRightElement width="4.5rem" mr={4}>
          <Button
            bgColor="green.500"
            color="white"
            h="1.75rem"
            size="md"
            _hover={{ bgColor: "white", color: "green.500" }}
          >
            Submit
          </Button>
        </InputRightElement>
      </InputGroup>

      <Flex
        flexDir="column"
        mt={{ base: 4, md: 12 }}
        mx={{ lg: "5rem" }}
        py={4}
        borderTop="1px solid"
        borderColor="green.500"
      >
        <Flex
          w="100%"
          marginTop={["1rem"]}
          justifyContent="space-between"
          flexDir={{ base: "column-reverse", md: "row" }}
        >
          <Copyright fontSize="1rem" />
          <Text my={{ base: 4, md: 0 }}>
            Built using Next.js with Typescript
          </Text>
          <Text w="fit-content">dylanokeks@yahoo.com</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
