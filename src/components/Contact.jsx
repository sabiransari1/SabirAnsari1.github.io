import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import emailjs from "@emailjs/browser";
import {
  Flex,
  Text,
  Input,
  Center,
  VStack,
  Textarea,
  Box,
  Image,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { Toast } from "./Toast";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_avqb6rt",
        "template_rzdfxwc",
        form.current,
        "L_kKOvVTY1BohKxbV"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setStatus(true);
        },
        (error) => {
          console.log(error.text);
          setStatus(false);
        }
      );
    setStatus(null);
  };

  return (
    <Box
      id={"contact"}
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
      <Flex
        align={"center"}
        justify={"space-between"}
        direction={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        gap={"1rem"}
      >
        {/* first */}
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
          >
            Get in Touch
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
            Contact me
          </Text>
        </Box>

        {/* second */}
        {/* first */}
        <VStack spacing={"1rem"}>
          <a
            href="https://github.com/SabirAnsari1"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            <Button
              id="contact-github"
              leftIcon={<FaGithub />}
              variant="solid"
              size={{
                base: "xs",
                sm: "sm",
                md: "md",
                lg: "md",
                xl: "lg",
                "2xl": "lg",
              }}
            >
              SabirAnsari1
            </Button>
          </a>

          <a
            href="https://www.linkedin.com/in/sabir-ansari-33b275257/"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            <Button
              id="contact-linkedin"
              leftIcon={<FaLinkedin />}
              variant="solid"
              size={{
                base: "xs",
                sm: "sm",
                md: "md",
                lg: "md",
                xl: "lg",
                "2xl": "lg",
              }}
            >
              Sabir Ansari
            </Button>
          </a>

          <Button
            id="contact-phone"
            leftIcon={<FaPhoneAlt />}
            variant="solid"
            cursor={"default"}
            size={{
              base: "xs",
              sm: "sm",
              md: "md",
              lg: "md",
              xl: "lg",
              "2xl": "lg",
            }}
          >
            +91 9560925661
          </Button>

          <Button
            id="contact-email"
            leftIcon={<FaRegEnvelope />}
            variant="solid"
            cursor={"default"}
            size={{
              base: "xs",
              sm: "sm",
              md: "md",
              lg: "md",
              xl: "lg",
              "2xl": "lg",
            }}
          >
            ansariisabir1@gmail.com
          </Button>
        </VStack>

        {/* second */}
        <form ref={form} onSubmit={sendEmail}>
          <VStack w={"100%"} spacing={"1rem"}>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              variant="Outline"
              size="lg"
              required
              border={"5px solid orange"}
            />

            <Input
              type="email"
              name="email"
              placeholder="Email"
              variant="Outline"
              size="lg"
              required
              border={"5px solid orange"}
            />

            <Textarea
              placeholder="Message"
              name="message"
              variant="Outline"
              size="lg"
              required
              rows="7"
              border={"5px solid orange"}
            />

            <button className="button" type="submit">
              Send
            </button>
          </VStack>
        </form>
      </Flex>

      {/* second */}
      {status === null ? (
        ""
      ) : status ? (
        <Toast status={status} />
      ) : (
        <Toast status={status} />
      )}
    </Box>
  );
};
