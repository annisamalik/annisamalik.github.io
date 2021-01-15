import React from "react";
import {
  SlideFade,
  Box,
  VStack,
  HStack,
  Image,
  Text,
  keyframes,
  Center,
  Button,
  Link,
  Collapse,
} from "@chakra-ui/react";
import themes from "../styles/theme";
import { Icon } from "@iconify/react";

interface IProps {
  workHistory: string[];
  colleagues: string[][];
}

export const WorkExp = ({ workHistory, colleagues }: IProps) => {
  const pulse = keyframes`
  0% { transform: scale(.95); } 
  50% { transform: scale(1); box-shadow: 0 0 0 20px rgba(51, 249, 196, 0);  }
  100% { transform: scale(.95); box-shadow: 0 0 0 0 rgba(51, 249, 196, 0); }`;
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <SlideFade in={true} offsetY="20px">
      <Box
        bgColor="white"
        borderRadius={20}
        p={3}
        position="relative"
        _before={{
          content: `"◄"`,
          color: "white",
          position: "absolute",
          top: "50",
          left: "-12px",
        }}
      >
        <Collapse startingHeight={100} in={show}>
          <HStack alignItems="flex-start">
            <Image
              src={process.env.PUBLIC_URL + `${workHistory[0]}`}
              alt="Vutura.io"
              height="72px"
              width="72px"
              border="3px solid rgba(77, 42, 23, 0.6)"
              boxSizing="border-box"
              borderRadius="50%"
              ml={2}
              mr={2}
            />
            <VStack textAlign="left" align="left" justifyContent="flex-start">
              <Text as="b" color={themes.colors.dark_brown}>
                {workHistory[1]}
              </Text>
              <Text>{workHistory[3]}</Text>
              <Text>{workHistory[4]}</Text>
              <Text>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident. Anim pariatur cliche reprehenderit, enim eiusmod
                high life accusamus terry richardson ad squid. Nihil anim
                keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                sapiente ea proident. Anim pariatur cliche reprehenderit, enim
                eiusmod high life accusamus terry richardson ad squid. Nihil
                anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident.
              </Text>
            </VStack>
          </HStack>
        </Collapse>
        <Center>
          <Button size="sm" onClick={handleToggle} height={19} fontSize={12}>
            {show ? "Close" : "Details"}
          </Button>
        </Center>
      </Box>
    </SlideFade>
  );
};
