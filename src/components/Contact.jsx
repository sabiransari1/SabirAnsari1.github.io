import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Flex, Text, Input, Center, VStack, Textarea } from "@chakra-ui/react";
import { Toast } from "./Toast";

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
    <>
      <Flex p={"3rem"} id={"contact"}>
        {/* first */}
        <Flex
          w={"40%"}
          direction={"column"}
          align={"center"}
          justify={"center"}
        >
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
        </Flex>
        {/* second */}
        <Center w={"60%"}>
          <form ref={form} onSubmit={sendEmail}>
            <VStack w={"100%"} spacing={"1rem"}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                variant="Outline"
                size="lg"
                border={"5px solid orange"}
              />

              <Input
                type="email"
                name="email"
                placeholder="Email"
                variant="Outline"
                size="lg"
                border={"5px solid orange"}
              />

              <Textarea
                placeholder="Message"
                name="message"
                variant="Outline"
                size="lg"
                border={"5px solid orange"}
              />

              <button className="button" type="submit">
                Send
              </button>
            </VStack>
          </form>
        </Center>
      </Flex>

      {status === null ? (
        ""
      ) : status ? (
        <Toast status={status} />
      ) : (
        <Toast status={status} />
      )}
    </>
  );
};
