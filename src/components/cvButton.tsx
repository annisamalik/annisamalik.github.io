import React from "react";
import { SlideFade, Button, keyframes, Wrap } from "@chakra-ui/react";
import themes from "../styles/theme";
import { Icon } from "@iconify/react";
import downloadIcon from "@iconify/icons-heroicons-solid/download";

export const CVButton: React.FC = () => {
  const pulse = keyframes`
  0% { transform: scale(.95); } 
  50% { transform: scale(1); box-shadow: 0 0 0 20px rgba(51, 249, 196, 0);  }
  100% { transform: scale(.95); box-shadow: 0 0 0 0 rgba(51, 249, 196, 0); }`;

  return (
    <SlideFade in={true} offsetY="20px">
      <Wrap>
        <Button
          fontFamily={themes.fonts.quicksand}
          as="b"
          borderRadius={50}
          width={200}
          bgGradient="linear(to-tr, #4AD0A0, #97F9C4)"
          //variant="solid"
          color={"white"}
          fontSize="14px"
          cursor="pointer"
          boxShadow="0px 7px 15px rgba(151, 249, 196, 0.5)"
          _hover={{
            animation: `${pulse} 1.5s infinite cubic-bezier(0.66, 0, 0, 1)`,
          }}
        >
          DOWNLOAD MY CV{"  "}
          <Icon
            icon={downloadIcon}
            style={{ color: "#ffffff", fontSize: "16px" }}
          />
        </Button>
      </Wrap>
    </SlideFade>
  );
};
