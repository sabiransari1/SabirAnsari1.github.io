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
    <Box p={"3rem"} id={"contact"}>
      {/* first */}
      <Flex align={"center"} justify={"space-between"}>
        {/* first */}
        <Box>
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            Get in Touch
          </Text>
          <Text
            fontSize={"4xl"}
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
            <Button id="contact-github" leftIcon={<FaGithub />} variant="solid">
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
              >
              Sabir Ansari
            </Button>
              </a>

          <Button
            id="contact-phone"
            leftIcon={<FaPhoneAlt />}
            variant="solid"
            cursor={"default"}
          >
            +91 9560925661
          </Button>

          <Button
            id="contact-email"
            leftIcon={<FaRegEnvelope />}
            variant="solid"
            cursor={"default"}
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
