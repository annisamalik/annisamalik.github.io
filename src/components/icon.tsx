import React from "react";
import { SlideFade, Center, Wrap, Tooltip } from "@chakra-ui/react";

interface IProps {
  children: React.ReactNode;
  label: string;
}

export const CustomBox = ({ children, label }: IProps) => {
  return (
    <SlideFade in={true} offsetY="20px">
      <Tooltip hasArrow label={label} bg="gray.300" color="black">
        <Wrap>
          <Center
            w="40px"
            h="40px"
            bg="tomato"
            color="white"
            as="span"
            pos="relative"
            borderRadius="5px"
            boxShadow="0 1px 2px rgba(0, 0, 0, 0.1)"
            transition="all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
            _after={{
              borderRadius: "5px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
              transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
              pos: "absolute",
              zIndex: "-1",
              top: "0",
              left: "0",
              w: "100%",
              h: "100%",
              opacity: "0",
              content: `""`,
            }}
            _hover={{
              transform: "scale(1.25, 1.25) translateY(-0.25em)",
              //_after = {{opacity : "1"}}
            }}
          >
            {children}
          </Center>
        </Wrap>
      </Tooltip>
    </SlideFade>
  );
};
