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
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: javascript, name: "JavaScript" },
  { img: react, name: "React" },
  { img: redux, name: "Redux" },
  { img: typescript, name: "TypeScript" },
  { img: chakra, name: "Chakra-UI" },
  { img: nodejs, name: "Node.js" },
  { img: express, name: "Express" },
  { img: mongodb, name: "MongoDB" },
  { img: git, name: "Git" },
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
              className="skills-card"
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
                  className="skills-card-img"
                  src={el.img}
                  alt="Skill card img"
                  borderRadius={"50%"}
                  boxShadow={
                    "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                  }
                />
              ) : (
                <Image
                  className="skills-card-img"
                  src={el.img}
                  alt="Skill card img"
                />
              )}
              <Center className="skills-card-name" mt={".5rem"}>
                {el.name}
              </Center>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
