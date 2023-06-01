import React from "react";
import { useToast, Wrap, WrapItem } from "@chakra-ui/react";

export const Toast = ({ status }) => {
  const toast = useToast();

  return (
    <Wrap>
      {status ? (
        <WrapItem>
          {toast({
            title: `Message has send successfully`,
            status: "success",
            isClosable: true,
            position: "top",
          })}
        </WrapItem>
      ) : (
        <WrapItem>
          {toast({
            title: `Something went wrong, try again`,
            status: "error",
            isClosable: true,
            position: "top",
          })}
        </WrapItem>
      )}
    </Wrap>
  );
};
