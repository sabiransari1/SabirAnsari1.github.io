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

export const About = () => {
  return (
    <Flex p={"0 3rem"} id="about" className="about section">
      {/* left */}
      <Center w={"40%"} p={"3rem"}>
        <Image src={SabirAnsari} alt="Sabir Ansari" />
      </Center>

      {/* right */}
      <Box w={"60%"} p={"3rem 0"}>
        {/* first */}
        <Flex ml={"1rem"}>
          <Text fontSize={"4xl"} fontWeight={"bold"} mr={".6rem"}>
            All
          </Text>
          <Text
            fontSize={"4xl"}
            fontWeight={"bold"}
            bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
            bgClip="text"
          >
            About Me
          </Text>
        </Flex>

        {/* second */}
        <UnorderedList
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
