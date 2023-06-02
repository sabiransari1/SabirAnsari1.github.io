import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import wave from "../assets/images/wave.png";

export const Footer = () => {
  return (
    <Flex
      p={"3rem 5rem"}
      w="100%"
      bgImage={wave}
      bgPosition={"center"}
      direction={"column"}
      align={"center"}
      gap={"1rem"}
    >
      <Text>Designed and build by Sabir Ansari, 2023 All rights reserved.</Text>
    </Flex>
  );
};
