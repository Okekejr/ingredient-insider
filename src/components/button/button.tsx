import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends ButtonProps {
  title: string;
}

export const ButtonUtil: FC<Props> = ({ title, ...rest }) => {
  return (
    <Button height="50px" width="150px" {...rest}>
      {title}
    </Button>
  );
};
