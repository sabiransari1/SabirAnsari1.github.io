import React from "react";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { GithubStats } from "./GithubStats";

const lightGithubStats = [
  {
    img1: "https://github-readme-stats.vercel.app/api/top-langs/?username=sabiransari1&theme=flag-india",
    img2: "https://github-readme-stats.vercel.app/api?username=sabiransari1&show_icons=true&theme=flag-india",
    img3: "https://github-readme-streak-stats.herokuapp.com/?user=sabiransari1&theme=flag-india",
  },
];

const darkGithubStats = [
  {
    img1: "https://github-readme-stats.vercel.app/api/top-langs/?username=sabiransari1&theme=great-gatsby",
    img2: "https://github-readme-stats.vercel.app/api?username=sabiransari1&show_icons=true&theme=great-gatsby",
    img3: "https://github-readme-streak-stats.herokuapp.com/?user=sabiransari1&theme=great-gatsby",
  },
];

export const Github = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      p={{
        base: "1rem 1rem",
        sm: "1rem 1rem",
        md: "1rem 2rem",
        lg: "3rem 5rem",
        xl: "3rem 5rem",
        "2xl": "3rem 5rem",
      }}
    >
      {/* first */}
      <Flex>
        <Text
          fontSize={{
            base: "3xl",
            sm: "3xl",
            md: "4xl",
            lg: "4xl",
            xl: "4xl",
            "2xl": "4xl",
          }}
          fontWeight={"bold"}
          mr={".6rem"}
          bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
          bgClip="text"
        >
          Github
        </Text>

        <Text
          fontSize={{
            base: "3xl",
            sm: "3xl",
            md: "4xl",
            lg: "4xl",
            xl: "4xl",
            "2xl": "4xl",
          }}
          fontWeight={"bold"}
        >
          Stats
        </Text>
      </Flex>

      {/* second */}
      {colorMode === "light"
        ? lightGithubStats?.map((el, index) => (
            <GithubStats key={index} {...el} />
          ))
        : darkGithubStats?.map((el, index) => (
            <GithubStats key={index} {...el} />
          ))}
    </Box>
  );
};
