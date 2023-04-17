import { Box, Flex } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex minH="100vh" direction="column" w="100%">
      <Box
        h={2}
        p={0}
        m={0}
        bgGradient="linear(to-l, #FFEBEB, #6DA9E4, green.500)"
      />
      {children}
    </Flex>
  );
};
