import React from "react";
import { Box, Flex, Grid, Text, Image, Center } from "@chakra-ui/react";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import redux from "../assets/images/redux.png";
import typescript from "../assets/images/typescript.png";
import chakra from "../assets/images/chakra.png";
import nodejs from "../assets/images/nodejs.png";
import express from "../assets/images/express.png";
import mongodb from "../assets/images/mongodb.png";
import git from "../assets/images/git.png";

const skills = [
  { img: html, title: "HTML" },
  { img: css, title: "CSS" },
  { img: javascript, title: "JavaScript" },
  { img: react, title: "React" },
  { img: redux, title: "Redux" },
  { img: typescript, title: "TypeScript" },
  { img: chakra, title: "Chakra-UI" },
  { img: nodejs, title: "Node.js" },
  { img: express, title: "Express" },
  { img: mongodb, title: "MongoDB" },
  { img: git, title: "Git" },
];

export const Skills = () => {
  return (
    <Box p={"0 3rem"} id={"skills"}>
      {/* first */}
      <Box p={"3rem 0"}>
        <Flex>
          <Text fontSize={"4xl"} fontWeight={"bold"} mr={".6rem"}>
            My
          </Text>
          <Text
            fontSize={"4xl"}
            fontWeight={"bold"}
            bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
            bgClip="text"
          >
            Technical Skills
          </Text>
        </Flex>

        {/* second */}
        <Grid templateColumns={"repeat(7,1fr)"} gap={"1rem"}>
          {skills?.map((el, index) => (
            <Box
              key={index}
              p={".5rem"}
              boxShadow={
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              }
              borderRadius={"10px"}
              cursor={"pointer"}
            >
              {index === 6 || index === 8 || index === 9 ? (
                <Image
                  src={el.img}
                  alt="Sabir Ansari"
                  borderRadius={"50%"}
                  boxShadow={
                    "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                  }
                />
              ) : (
                <Image src={el.img} alt="Sabir Ansari" />
              )}
              <Center mt={".5rem"}>{el.title}</Center>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
