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
import { SkillCard } from "./SkillCard";

const frontend = [
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: javascript, name: "JavaScript" },
  { img: react, name: "React" },
  { img: redux, name: "Redux" },
  { img: typescript, name: "TypeScript" },
  { img: chakra, name: "Chakra-UI" },
];
const backend = [
  { img: nodejs, name: "Node.js" },
  { img: express, name: "Express" },
  { img: mongodb, name: "MongoDB" },
];
const other = [{ img: git, name: "Git" }];

export const Skills = () => {
  return (
    <Box
      id={"skills"}
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
      <Box>
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
          >
            My
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
            bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
            bgClip="text"
          >
            Technical Skills
          </Text>
        </Flex>

        {/* second */}
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
            xl: "repeat(2,1fr)",
            "2xl": "repeat(2,1fr)",
          }}
          gap={"2rem"}
          p={{
            base: "0 1rem",
            sm: "0 1rem",
            md: "0 2rem",
            lg: "0 4rem",
            xl: "0 5rem",
            "2xl": "0 5rem",
          }}
        >
          <Box>
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
              bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
              bgClip="text"
            >
              Frontend
            </Text>

            <Grid
              templateColumns={{
                base: "repeat(2,1fr)",
                sm: "repeat(2,1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(3,1fr)",
                xl: "repeat(4,1fr)",
                "2xl": "repeat(5,1fr)",
              }}
              gap={"1rem"}
            >
              {frontend?.map((el, index) => (
                <SkillCard key={index} {...el} />
              ))}
            </Grid>
          </Box>

          <Box>
            <Box>
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
                bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
                bgClip="text"
              >
                Backend
              </Text>

              <Grid
                templateColumns={{
                  base: "repeat(2,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(3,1fr)",
                  xl: "repeat(4,1fr)",
                  "2xl": "repeat(5,1fr)",
                }}
                gap={"1rem"}
              >
                {backend?.map((el, index) => (
                  <SkillCard key={index} {...el} />
                ))}
              </Grid>
            </Box>

            <Box>
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
                bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
                bgClip="text"
              >
                Other
              </Text>

              <Grid
                templateColumns={{
                  base: "repeat(2,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(3,1fr)",
                  xl: "repeat(4,1fr)",
                  "2xl": "repeat(5,1fr)",
                }}
                gap={"1rem"}
              >
                {other?.map((el, index) => (
                  <SkillCard key={index} {...el} />
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
