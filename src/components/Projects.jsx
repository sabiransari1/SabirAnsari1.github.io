import React, { useState } from "react";
import { Link } from "react-scroll";
import { Box, Flex, Text, Grid, Image } from "@chakra-ui/react";
import AshleshaThakur from "../assets/images/AshleshaThakur.jpg";

const projects = [
  {
    img: AshleshaThakur,
    title: "Sabir Ansari",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit asperiores aspernatur dicta veniam minus, odio sed nam soluta ullam sapiente, dolorum neque maiores nemo odit, officia quae quidem? Facere, necessitatibus.",
    stack: "HTML, CSS, javascript",
    live: "SabirAnsari1.github.io",
    codebase: "SabirAnsari1.github.io",
  },
  {
    img: AshleshaThakur,
    title: "Sabir Ansari",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit asperiores aspernatur dicta veniam minus, odio sed nam soluta ullam sapiente, dolorum neque maiores nemo odit, officia quae quidem? Facere, necessitatibus.",
    stack: "HTML, CSS, javascript",
    live: "SabirAnsari1.github.io",
    codebase: "SabirAnsari1.github.io",
  },
  {
    img: AshleshaThakur,
    title: "Sabir Ansari",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit asperiores aspernatur dicta veniam minus, odio sed nam soluta ullam sapiente, dolorum neque maiores nemo odit, officia quae quidem? Facere, necessitatibus.",
    stack: "HTML, CSS, javascript",
    live: "SabirAnsari1.github.io",
    codebase: "SabirAnsari1.github.io",
  },
  {
    img: AshleshaThakur,
    title: "Sabir Ansari",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit asperiores aspernatur dicta veniam minus, odio sed nam soluta ullam sapiente, dolorum neque maiores nemo odit, officia quae quidem? Facere, necessitatibus.",
    stack: "HTML, CSS, javascript",
    live: "SabirAnsari1.github.io",
    codebase: "SabirAnsari1.github.io",
  },
];

export const Projects = () => {
  return (
    <Box p={"3rem"} id="projects">
      {/* first */}
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
          Creative Projects
        </Text>
      </Flex>

      {/* second */}
      <Grid templateColumns={"repeat(2,1fr)"} gap={"1rem"} p={"3rem"}>
        {projects?.map((el, index) => (
          <Grid
            className="project-card"
            key={index}
            p={"3rem"}
            gap={".5rem"}
            boxShadow={
              "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
            }
            cursor={"pointer"}
            borderRadius="10px"
            color={"#788097"}
          >
            <Image src={el.img} alt={el.title} w={"50%"} margin={"auto"} />
            <Text className="project-title">{el.title}</Text>
            <Text className="project-description" textAlign={"justify"}>
              {el.desc}
            </Text>

            <Flex>
              <Text
                className="project-tech-stack"
                bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
                bgClip="text"
                mr={".6rem"}
              >
                Tech Stack :-{" "}
              </Text>
              <Text>{el.stack}</Text>
            </Flex>

            <Flex justify={"space-between"}>
              <button className="button project-github-link">
                <Link to={el.codebase} spy={true} smooth={true}>
                  Codebase
                </Link>
              </button>

              <button className="button roject-deployed-link">
                <Link to={el.live} spy={true} smooth={true}>
                  Live
                </Link>
              </button>
            </Flex>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
