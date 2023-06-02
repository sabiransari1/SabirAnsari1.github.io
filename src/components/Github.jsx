import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  useColorMode,
  Center,
  VStack,
} from "@chakra-ui/react";

export const Github = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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

      {colorMode === "light" ? (
        <VStack spacing={"1rem"}>
          <Center>
            <Image
              src={
                "https://github-readme-stats.vercel.app/api/top-langs/?username=sabiransari1&theme=flag-india"
              }
            />
          </Center>

          <Flex gap={"1rem"}>
            <Image
              src={
                "https://github-readme-stats.vercel.app/api?username=sabiransari1&show_icons=true&theme=flag-india"
              }
            />
            <Image
              src={
                "https://github-readme-streak-stats.herokuapp.com/?user=sabiransari1&theme=flag-india"
              }
            />
          </Flex>
        </VStack>
      ) : (
        <VStack gap={"1rem"}>
          <Center>
            <Image
              src={
                "https://github-readme-stats.vercel.app/api/top-langs/?username=sabiransari1&theme=great-gatsby"
              }
            />
          </Center>

          <Flex gap={"1rem"}>
            {" "}
            <Image
              src={
                "https://github-readme-stats.vercel.app/api?username=sabiransari1&show_icons=true&theme=great-gatsby"
              }
            />
            <Image
              src={
                "https://github-readme-streak-stats.herokuapp.com/?user=sabiransari1&theme=great-gatsby"
              }
            />
          </Flex>
        </VStack>
      )}
    </Box>
  );
};
