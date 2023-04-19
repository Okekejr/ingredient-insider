import { newStatusT } from "@/types";
import { Badge as CBadge, BadgeProps, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends BadgeProps {
  data: newStatusT;
  searchFunc: (searchText: string) => Promise<void>;
}

export const Badge: FC<Props> = ({ data, searchFunc, ...rest }) => {
  const { statusT } = data;

  return (
    <CBadge
      borderRadius={4}
      backgroundColor="green.400"
      onClick={() => searchFunc(statusT)}
      _hover={{ cursor: "pointer" }}
      {...rest}
    >
      <Text
        fontFamily="statusTags"
        fontWeight="normal"
        textTransform="none"
        color="white"
      >
        {statusT}
      </Text>
    </CBadge>
  );
};
