import { SEARCH_DISH } from "@/requests";
import { Status } from "@/types";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { Badge } from "../badge/Badge";
import { SectionContainer } from "../layout/SectionContainer";

const SearchPage: FC = () => {
  const [result, setResult] = useState([]);
  const [searchT, setSearchT] = useState("");
  const [status, setStatus] = useState<Status["data"]>([]);

  const searchRequest = async (searchText: string) => {
    try {
      const request = await fetch(`${SEARCH_DISH}s=${searchText}`);
      const resp = await request.json();
      setResult(resp);
    } catch (error) {
      alert(error);
    }
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // searchRequest(searchT);

    // creating new status for the badges
    const newStatus = {
      id: Math.random(),
      statusT: searchT,
    };

    // add newstatus to the status history
    setStatus([...status, newStatus]);

    // clear input field
    setSearchT("");
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fullSearch = event.currentTarget.value;
    setSearchT(fullSearch);
  };

  return (
    <SectionContainer mt={{ base: "3rem", md: "4.5rem" }}>
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
                onSubmit={submitHandler}
              >
                Submit
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>
      <Box display="flex" textAlign="center" m="auto" alignItems="center">
        <Text mr="2">History:</Text>
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
          : "..."}
      </Box>
    </SectionContainer>
  );
};

export default SearchPage;
