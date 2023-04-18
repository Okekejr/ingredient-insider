import { FC } from "react";
import { Flex, FlexProps, Heading, Link } from "@chakra-ui/react";
import { routes } from "../../util/routes/index";
import { IRoute } from "@/util/routes/IRoute";

interface NavLinksProps extends FlexProps {
  onClose: () => void;
}

export const MobileNavLinks: FC<NavLinksProps> = ({ onClose, ...rest }) => {
  return (
    <Flex as="nav" alignItems="center" {...rest}>
      {routes.map((routeGroup: IRoute) => {
        return (
          <Flex
            key={routeGroup.title}
            flexDirection="column"
            alignItems="flex-end"
            mb={10}
          >
            <Heading fontSize="2xl" mb={4} fontWeight="400" color="neutral.400">
              <Link
                href={routeGroup.url}
                _active={{ bg: "transparent" }}
                color="#fff"
                _hover={{ color: "green.500" }}
                fontSize="button"
                onClick={onClose}
              >
                {routeGroup.title}
              </Link>
            </Heading>
          </Flex>
        );
      })}
    </Flex>
  );
};
