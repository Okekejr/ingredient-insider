import { FC } from "react";
import { Badge as CBadge, BadgeProps, Text } from "@chakra-ui/react";

interface Props extends BadgeProps {
  data?: {
    strCategory?: string;
  };
  text?: string;
}

export const Pills: FC<Props> = ({ data, text, ...rest }) => {
  return (
    <CBadge
      borderRadius={4}
      backgroundColor="#6DA9E4"
      _hover={{ cursor: "pointer" }}
      {...rest}
    >
      <Text
        fontSize="sm"
        fontFamily="statusTags"
        fontWeight="normal"
        textTransform="none"
        color="white"
      >
        {data?.strCategory || text}
      </Text>
    </CBadge>
  );
};
