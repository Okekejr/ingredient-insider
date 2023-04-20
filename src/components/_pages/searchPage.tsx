import { SEARCH_DISH } from "@/requests";
import { MealsT, Status } from "@/types";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { Badge } from "../badge";
import { PopularFlex } from "../layout/popularFlex";
import { SectionContainer } from "../layout/SectionContainer";
import { SearchCard } from "../search";

const SearchPage: FC = () => {
  const [result, setResult] = useState<MealsT["meals"]>([]);
  const [searchT, setSearchT] = useState("");
  const [status, setStatus] = useState<Status["data"]>([]);

  const searchRequest = async (searchText: string | undefined) => {
    try {
      const request = await fetch(`${SEARCH_DISH}s=${searchText}`);
      const resp = await request.json();
      setResult(resp.meals);
    } catch (error) {
      alert(error);
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    searchRequest(searchT);

    // creating new status for the badges
    const newStatus = {
      id: Math.random(),
      statusT: searchT,
    };

    // check if the status already exists before adding
    const statusExists = status.some((s) => s.statusT === newStatus.statusT);

    // add new status to the status history
    if (!statusExists) {
      setStatus([...status, newStatus]);
    }

    // clear input field
    setSearchT("");
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fullSearch = event.currentTarget.value;
    setSearchT(fullSearch);
  };

  return (
    <SectionContainer mt={{ base: "4rem", md: "3rem" }}>
      <form onSubmit={submitHandler}>
        <FormControl isRequired>
          <InputGroup size="lg" my={8} mx="auto" w={{ md: "lg" }}>
            <Input
              borderColor="white"
              pr="4.5rem"
              type="text"
              value={searchT}
              onChange={searchHandler}
              placeholder="Search for a dish"
              _placeholder={{ color: "inherit" }}
            />
            <InputRightElement width="4.5rem" mr={4}>
              <Button
                bgColor="green.500"
                color="white"
                h="1.75rem"
                size="md"
                _hover={{ bgColor: "#6DA9E4" }}
                onClick={submitHandler}
              >
                Submit
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>

      <Box display="column" textAlign="center">
        <Flex justifyContent="center" alignItems="center" mb={8}>
          <Text mr="2">Search from History:</Text>
          {status.length
            ? status.map((item) => {
                return (
                  <Badge
                    data={item}
                    searchFunc={searchRequest}
                    key={item.id}
                    mr={4}
                  />
                );
              })
            : ""}
        </Flex>
      </Box>

      <PopularFlex w={{ base: "100%" }}>
        {result !== null && result.length
          ? result.map((item, i) => {
              return (
                <SlideFade in offsetY="20px" delay={0.2}>
                  <SearchCard data={item} key={i} />
                </SlideFade>
              );
            })
          : "...nothing to display yet 🤔"}
      </PopularFlex>
    </SectionContainer>
  );
};

export default SearchPage;
