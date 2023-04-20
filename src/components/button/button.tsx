import { Button, ButtonProps, Link } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends ButtonProps {
  title: string;
  href?: string;
}

export const ButtonUtil: FC<Props> = ({ title, href, ...rest }) => {
  return (
    <Button
      as={href === "" ? undefined : Link}
      type="button"
      height="50px"
      width="150px"
      href={href}
      {...rest}
    >
      {title}
    </Button>
  );
};
