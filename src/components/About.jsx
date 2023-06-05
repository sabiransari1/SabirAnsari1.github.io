import React from "react";
import {
  Flex,
  Box,
  ListItem,
  UnorderedList,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import SabirAnsari from "../assets/images/SabirAnsari.gif";
import { Typewriter } from "react-simple-typewriter";

export const About = () => {
  return (
    <Flex
      id="about"
      className="about section"
      p={{
        base: "1rem 1rem",
        sm: "2rem 2rem",
        md: "2rem 3rem",
        lg: "3rem 5rem",
        xl: "3rem 5rem",
        "2xl": "3rem 5rem",
      }}
      direction={{
        base: "column",
        sm: "row",
        md: "row",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
    >
      {/* left */}
      <Flex
        w={{
          base: "100%",
          sm: "40%",
          md: "40%",
          lg: "40%",
          xl: "40%",
          "2xl": "40%",
        }}
        p={{
          base: "2rem",
          sm: "2rem",
          md: "2rem",
          lg: "3rem",
          xl: "3rem",
          "2xl": "3rem",
        }}
        direction={"column"}
        align={"center"}
        justify={"center"}
      >
        <Image src={SabirAnsari} alt="Sabir Ansari" w={"100%"} />

        <Center>
          <Text>
            Life is simple{" "}
            <span
              style={{
                color: "#fca61f",
              }}
            >
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Eat", "Code", "Sleep", "Repeat!"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </span>
          </Text>
        </Center>
      </Flex>

      {/* right */}
      <Box
        w={{
          base: "100%",
          sm: "60%",
          md: "60%",
          lg: "60%",
          xl: "60%",
          "2xl": "60%",
        }}
      >
        {/* first */}
        <Flex ml={"1rem"}>
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
            All
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
            About Me
          </Text>
        </Flex>

        {/* second */}
        <UnorderedList
          id="user-detail-intro"
          spacing={".5rem"}
          styleType={"square"}
          textAlign={"justify"}
          color={"#788097"}
        >
          <ListItem>
            Hello! My name Sabir Ansari and I enjoy creating things that live on
            the internet.
          </ListItem>

          <ListItem>
            I'm a passionate Developer, with strong administrative and
            communication skills, good attention to detail and the ability to
            write efficient code using MERN Stack.
          </ListItem>

          <ListItem>
            My interest in web development started back in 2016 when I was in
            class 10th I saw my cousin making some basic webpages and I got
            facinated with it.
          </ListItem>

          <ListItem>
            As I grow and flourish as a Developer, one thing which keeps me
            going is my inquisitiveness for discovering new things every day.
          </ListItem>

          <ListItem>
            Fast Forwarding to today, I built a number of web applications and 4
            major projects. Learned a great deal about teamwork, leadership, and
            communication. After months of rigorous training, here I am looking
            for an opportunity as a full stack web developer.
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};
