import { FILTERING_THINGS } from "@/requests";
import { randomData } from "@/types";
import {
  Card,
  CardProps,
  Flex,
  Heading,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { Pills } from "../categories/pills";

interface Props extends CardProps {
  data: randomData;
}

export const SearchCard: FC<Props> = ({ data, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { strMealThumb, strMeal, strTags, strInstructions, strYoutube } = data;

  const getEachTag = (strTags?: string) => {
    const strings_list = strTags?.split(",");
    return strings_list || [];
  };

  const tags = getEachTag(strTags);

  const ingredient = FILTERING_THINGS(data, "Ingredient");

  const measurements = FILTERING_THINGS(data, "Measure");

  const Recipe = [
    {
      ingredients: ingredient,
      measurement: measurements,
    },
  ];

  return (
    <>
      <Card
        w="xs"
        onClick={onOpen}
        opacity="0.8"
        transition="transform 0.8s, opacity 0.5s"
        _hover={{ transform: "scale(1.1)", opacity: 1, cursor: "pointer" }}
        {...rest}
      >
        <Image
          src={strMealThumb}
          alt={strMeal}
          borderRadius="lg"
          boxSize="100%"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{strMeal}</Heading>
        </Stack>
        <Flex gap={4} justifyContent="space-around" flexWrap="wrap" my={4}>
          {tags
            ? tags.map((tag, i) => {
                return <Pills text={tag} key={i} />;
              })
            : ""}
        </Flex>
      </Card>

      <Modal
        onClose={onClose}
        size={{ base: "xs", md: "xl" }}
        isOpen={isOpen}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            alignItems="center"
            mt={4}
          >
            <Image
              src={strMealThumb}
              alt={strMeal}
              borderRadius="full"
              boxSize="10rem"
              ml={4}
            />
            <VStack>
              <ModalHeader fontSize={{ base: "1rem", md: "1.2rem" }}>
                {strMeal}
              </ModalHeader>
            </VStack>
          </Flex>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer mt={4}>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Ingredients</Th>
                    <Th>Measurements</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Recipe.length
                    ? Recipe[0].ingredients?.map((ing, i) => {
                        const meas = Recipe[0].measurement[i];
                        return (
                          <Tr key={i}>
                            <Td>{ing}</Td>
                            <Td>{meas}</Td>
                          </Tr>
                        );
                      })
                    : ""}
                </Tbody>
              </Table>
            </TableContainer>
            <Heading fontSize={{ base: "1rem", md: "1.7rem" }} my={4}>
              Instructions
            </Heading>
            <Text textAlign="justify" as="p" fontSize={{ base: "", md: "" }}>
              {strInstructions}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Flex alignItems="center" flexDir={{ base: "column", md: "row" }}>
              <Text pr={4}>Video Instruction -</Text>
              <Link href={strYoutube} isExternal>
                {strYoutube}
              </Link>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
