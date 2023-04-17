import { Text, TextProps } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

interface Props extends TextProps {
  text: string;
  tcolor?: string;
  bgGrad?: string;
}

export const TextAnimation: FC<Props> = ({ text, tcolor, bgGrad, ...rest }) => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = text;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      const newText = fullText.substring(0, index + 1);
      setDisplayedText(newText);
      index++;
      if (newText === fullText) {
        clearInterval(intervalId);
      }
    }, 200);
    return () => {
      clearInterval(intervalId);
    };
  }, [fullText]);

  return (
    <Text textColor={tcolor} bgGradient={bgGrad} bgClip="text" textShadow={tcolor} {...rest}>
      {displayedText}
    </Text>
  );
};
