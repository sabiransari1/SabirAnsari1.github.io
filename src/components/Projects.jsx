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
    codebase: "https://github.com/SabirAnsari1/todo-application",
    live: "SabirAnsari1.github.io",
  },
  {
    img: dashboard,
    title: "CRUD Dashboard",
    desc: "CRUD dashboard, an user interface that we use to interact with databases through APIs.",
    stack: "HTML, CSS, javascript, React ,Chakra-UI",
    codebase: "https://github.com/SabirAnsari1/crud-dashboard",
    live: "SabirAnsari1.github.io",
  },
];

export const Projects = () => {
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
      id="projects"
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
          Creative Projects
        </Text>
      </Flex>

      {/* second */}
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(2,1fr)",
          "2xl": "repeat(3,1fr)",
        }}
        gap={"2rem"}
      >
        {projects?.map((el, index) => (
          <Grid
            className="project-card"
            key={index}
            p={{
              base: "1rem",
              sm: "1rem",
              md: "1rem",
              lg: "3rem",
              xl: "3rem",
              "2xl": "3rem",
            }}
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
                transition="transform .5s"
                _hover={{
                  cursor: "pointer",
                  transform: "scale(0.8)",
                }}
              />
            </a>

            <Center
              className="project-title"
              fontSize={"2xl"}
              color={colorMode === "light" ? "black" : "white"}
            >
              {el.title}
            </Center>

            <Text
              className="project-description"
              textAlign={"justify"}
              fontSize={{
                base: "1xl",
                sm: "1xl",
                md: "1xl",
                lg: "1xl",
                xl: "1xl",
                "2xl": "2xl",
              }}
            >
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
