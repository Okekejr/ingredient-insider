import { FC } from "react"
import { Text, TextProps } from "@chakra-ui/react"

export const Copyright: FC<TextProps> = ({ ...rest }) => {
  return <Text {...rest}>&copy; {new Date().getFullYear()} Okeke Emmanuel C.</Text>
}
