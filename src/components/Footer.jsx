import React from "react";
import { Flex, Text, HStack, Image, Box } from "@chakra-ui/react";
import wave from "../assets/images/wave.png";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";

export const Footer = () => {
  return (
    <Flex
      w="100%"
      py={"10rem"}
      bgImage={wave}
      bgPosition="center"
      direction={"column"}
      align={"center"}
      gap={"1rem"}
    >
      <Text>ansariisabir1@gmail.com</Text>

      <Flex justify={"space-around"}>
        <Image src={github} alt="Sabir Ansari" w={"30%"} />
        <Image src={linkedin} alt="Sabir Ansari" w={"30%"} />
      </Flex>

      <Text>Designed and build by Sabir Ansari, 2023 All rights reserved.</Text>
    </Flex>
  );
};
