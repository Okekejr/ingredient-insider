import { newStatusT } from "@/types";
import { Badge as CBadge, BadgeProps, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends BadgeProps {
  data?: newStatusT;
  newData?: {
    strCategory?: string;
  };
  searchFunc: (searchText: string | undefined) => Promise<void>;
}

export const Badge: FC<Props> = ({ data, newData, searchFunc, ...rest }) => {
  return (
    <CBadge
      borderRadius={4}
      backgroundColor="green.400"
      onClick={() => searchFunc(data?.statusT || newData?.strCategory)}
      _hover={{ cursor: "pointer" }}
      {...rest}
    >
      <Text
        fontFamily="statusTags"
        fontWeight="normal"
        textTransform="none"
        color="white"
      >
        {data?.statusT || newData?.strCategory}
      </Text>
    </CBadge>
  );
};
