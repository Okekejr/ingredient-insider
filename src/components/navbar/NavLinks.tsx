import { FC } from "react";
import { Flex, FlexProps, Menu, Link, MenuItem } from "@chakra-ui/react";
import { routes } from "../../util/routes/index";
import { IRoute } from "../../util/routes/IRoute";

export const NavLinks: FC<FlexProps> = (props) => {
  return (
    <Flex as="nav" alignItems="center" {...props}>
      {routes.map((routeGroup: IRoute) => {
        return (
          <Menu key={routeGroup.title} autoSelect={false}>
            <>
              <MenuItem
                as={Link}
                href={routeGroup.url}
                position="relative"
                background="transparent"
                w="fit-content"
                _hover={{
                  textDecor: "none",
                  _after: { w: "70%" },
                }}
                _after={{
                  content: `""`,
                  position: "absolute",
                  backgroundColor: "green.500",
                  width: "0",
                  height: "3px",
                  left: 3,
                  bottom: 0,
                  transition: "width 0.35s ease 0s",
                }}
              >
                {routeGroup.title}
              </MenuItem>
            </>
          </Menu>
        );
      })}
    </Flex>
  );
};
