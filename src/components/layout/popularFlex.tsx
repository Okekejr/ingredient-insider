import { List, ListProps } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends ListProps {
  children: React.ReactNode;
}

export const PopularFlex: FC<Props> = ({ children, ...rest }) => {
  return (
    <List
      display="flex"
      gap={8}
      justifyContent="space-evenly"
      flexWrap="wrap"
      margin="auto"
      w={{base: '100%', md: '80%'}}
      {...rest}
    >
      {children}
    </List>
  );
};
