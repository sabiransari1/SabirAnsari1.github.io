import React from "react";
import { Flex, Box, Image, Text, HStack } from "@chakra-ui/react";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import AshleshaThakur from "../assets/images/AshleshaThakur.jpg";
import resume from "../assets/resume/Sabir-Ansari-Resume.pdf";

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
        <Box
          id="resume-button-2"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1W33mGB_jZwOzgvqO93pYUejy4CVZ0L2C/view?usp=sharing"
            );
          }}
        >
          {" "}
          <a id="resume-link-2" href={resume} download={"Sabir-Ansari-Resume"}>
            <button className="button">Resume</button>
          </a>
        </Box>

        {/* third */}
        <HStack spacing={"1rem"}>
          <a
            href="https://github.com/SabirAnsari1"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            <Image
              id="contact-github"
              src={github}
              transform="scale(0.5)"
              transition="transform .5s"
              _hover={{
                cursor: "pointer",
                transform: "scale(0.8)",
              }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/sabir-ansari-33b275257/"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            <Image
              id="contact-linkedin"
              src={linkedin}
              transform="scale(0.5)"
              transition="transform .5s"
              _hover={{
                cursor: "pointer",
                transform: "scale(0.8)",
              }}
            />
          </a>
        </HStack>
      </Flex>

      {/* right */}
      <Box p={"3rem"} w={"40%"} className="home-img">
        <Image src={AshleshaThakur} alt={"Sabir Ansari"} />
      </Box>
    </Flex>
  );
};
