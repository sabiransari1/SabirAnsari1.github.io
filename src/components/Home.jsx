import React from "react";
import { Flex, Box, Button, Image, Text, HStack } from "@chakra-ui/react";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import AshleshaThakur from "../assets/images/AshleshaThakur.jpg";

export const Home = () => {
  return (
    <Flex p={"0 3rem"} id="home">
      {/* left */}
      <Flex
        p={"3rem 0"}
        direction={"column"}
        justify={"space-around"}
        w={"60%"}
      >
        {/* first */}
        <Box>
          <Box>
            <Text fontSize={"4xl"} fontWeight={"bold"}>
              Hy, I Am
            </Text>
            <Text
              id="user-detail-name"
              fontSize={"5xl"}
              fontWeight={"extrabold"}
              bgGradient="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)"
              bgClip="text"
            >
              Sabir Ansari
            </Text>
          </Box>

          <Box id="user-detail-intro" textAlign={"justify"} color={"#788097"}>
            An enthusiastic solution-driven full-stack web developer with a
            creative mindset, skilled to use both front-end & back-end web
            development tools. Aiming to leverage once knowledge & build
            world-class applications.
          </Box>
        </Box>

        {/* second */}
        <Box>
          <button className="button">Download CV</button>
        </Box>

        {/* third */}
        <HStack spacing={"1rem"}>
          <Image src={github} w={"5%"} id="contact-github" />
          <Image src={linkedin} w={"5%"} id="contact-linkedin" />
        </HStack>
      </Flex>

      {/* right */}
      <Box p={"3rem"} w={"40%"}>
        <Image src={AshleshaThakur} alt={"Sabir Ansari"} />
      </Box>
    </Flex>
  );
};
