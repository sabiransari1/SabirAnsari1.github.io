import React from "react";
import { Box, Image, Center } from "@chakra-ui/react";

export const SkillCard = ({ img, name }) => {
  return (
    <Box
      className="skills-card"
      borderRadius={"10px"}
      cursor={"pointer"}
      p={".5rem"}
      boxShadow={
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      }
      w={"100px"}
    >
      <Image className="skills-card-img" src={img} alt="Skill card img" w={"100%"}/>
      <Center className="skills-card-name" mt={".5rem"}>
        {name}
      </Center>
    </Box>
  );
};
