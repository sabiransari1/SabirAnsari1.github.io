import React from "react";
import { Link } from "react-scroll";
import {
  Box,
  Flex,
  Text,
  Grid,
  Image,
  Center,
  useColorMode,
} from "@chakra-ui/react";
import zoomcar from "../assets/images/zoomcar.png";
import apnamart from "../assets/images/apnamart.png";
import todo from "../assets/images/todo.png";
import dashboard from "../assets/images/dashboard.png";

const projects = [
  {
    img: zoomcar,
    title: "Zoomcar Clone",
    desc: "Zoomcar is an e-commerce car rental platform.",
    stack: "HTML, CSS, javascript",
    codebase: "https://github.com/SabirAnsari1/tasteless-horse-2112",
    live: "https://zoom-car.netlify.app/",
  },
  {
    img: apnamart,
    title: "IndiaMart Clone",
    desc: "ApnaMART is inspired by IndiaMART, IndiaMART connecting buyers with suppliers as well as individual customers.",
    stack: "HTML, CSS, javascript",
    codebase: "https://github.com/sinnu1908/radioactive-song-3321",
    live: "https://aapnamart.netlify.app/",
  },
  {
    img: todo,
    title: "Todo Application",
    desc: "A Todo Application, It allows users to effortlessly manage their tasks and events, helping them stay organized and on top.",
    stack: "HTML, CSS, javascript, React ,Chakra-UI",
    codebase: "SabirAnsari1.github.io",
    live: "SabirAnsari1.github.io",
  },
  {
    img: dashboard,
    title: "CRUD Dashboard",
    desc: "CRUD dashboard, an user interface that we use to interact with databases through APIs.",
    stack: "HTML, CSS, javascript, React ,Chakra-UI",
    codebase: "SabirAnsari1.github.io",
    live: "SabirAnsari1.github.io",
  },
];

export const Projects = () => {
  const { colorMode } = useColorMode();

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
            borderRadius="10px"
            color={"#788097"}
          >
            <a href={el.live} target={"_blank"} rel="noreferrer noopener">
              <Image
                src={el.img}
                alt={el.title}
                margin={"auto"}
                borderRadius="10px"
                cursor={"pointer"}
              />
            </a>

            <Center
              className="project-title"
              fontSize={"2xl"}
              color={colorMode === "light" ? "black" : "white"}
            >
              {el.title}
            </Center>

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
              <a href={el.codebase} target={"_blank"} rel="noreferrer noopener">
                <button className="button project-github-link">Codebase</button>
              </a>

              <a href={el.live} target={"_blank"} rel="noreferrer noopener">
                <button className="button roject-deployed-link">Live</button>
              </a>
            </Flex>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
