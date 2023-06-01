import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export const Github = () => {
  return (
    <Box p={"3rem"}>
      <Flex>
        <Text
          fontSize={"4xl"}
          fontWeight={"bold"}
          mr={".6rem"}
          bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
          bgClip="text"
        >
          Github
        </Text>

        <Text fontSize={"4xl"} fontWeight={"bold"}>
          Stats
        </Text>
      </Flex>
    </Box>
  );
};
