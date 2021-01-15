import React from "react";
import { SlideFade, HStack, Text, keyframes } from "@chakra-ui/react";

export const Malik: React.FC = () => {
  const shadowText = keyframes`
0% {  
    transform: translateX(0);
    text-shadow: 
        0 0 0 #0c2ffb, 
        0 0 0 #2cfcfd, 
        0 0 0 #fb203b, 
        0 0 0 #fefc4b;
}

20% {  
    transform: translateX(-1em);
    text-shadow: 
    0.125em 0 0 #0c2ffb, 
    0.25em 0 0 #2cfcfd, 
    -0.125em 0 0 #fb203b, 
    -0.25em 0 0 #fefc4b;
}

40% {  
    transform: translateX(0.5em);
    text-shadow: 
    -0.0625em 0 0 #0c2ffb, 
    -0.125em 0 0 #2cfcfd, 
    0.0625em 0 0 #fb203b, 
    0.125em 0 0 #fefc4b;
}

60% {
    transform: translateX(-0.25em);
    text-shadow: 
        0 0.03125em 0 #0c2ffb, 
        0 0.0625em 0 #2cfcfd, 
        0 -0.03125em 0 #fb203b, 
        0 -0.0625em 0 #fefc4b;
}

80% {  
    transform: translateX(0);
    text-shadow: 
        0 0 0 #0c2ffb, 
        0 0 0 #2cfcfd, 
        0 0 0 #fb203b, 
        0 0 0 #fefc4b;
}
`;
  return (
    <SlideFade in={true} offsetY="20px">
      <Text
        align="left"
        fontFamily="'Abril Fatface', cursive"
        fontSize="64px"
        textShadow="4px 4px #A4713C,8px 8px #4AD0A0;"
        letterSpacing="0.1em"
        css={{
          "-webkit-text-fill-color": "transparent",
          "-webkit-text-stroke-width": "1px",
          "-webkit-text-stroke-color": "white",
        }}
        //animation={`${shadowText} 1.5s ease-in-out infinite`}
      >
        <HStack>
          <Text
            _hover={{
              fontStyle: "italic",
            }}
          >
            I
          </Text>
          <Text
            _hover={{
              fontStyle: "italic",
            }}
          >
            am
          </Text>
          <Text
            _hover={{
              fontStyle: "italic",
            }}
          >
            Malik
          </Text>
        </HStack>
      </Text>
    </SlideFade>
  );
};
