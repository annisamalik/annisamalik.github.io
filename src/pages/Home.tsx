import React, { useState, useRef } from "react";
import {
  Flex,
  Spacer,
  Text,
  Link,
  Box,
  useColorMode,
  useColorModeValue,
  ChakraProvider,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  ColorModeScript,
  ColorMode,
  Image,
  HStack,
  Center,
  GridItem,
  Divider,
  Wrap,
} from "@chakra-ui/react";
import themes from "../styles/theme";
import { Icon, InlineIcon } from "@iconify/react";
//import { GrSend } from 'react-icons/fa';
import linkedinRect from "@iconify/icons-brandico/linkedin-rect";
import twitterBird from "@iconify-icons/brandico/twitter-bird";
import bloggerRect from "@iconify-icons/brandico/blogger-rect";
import gmailIcon from "@iconify-icons/cib/gmail";
import githubIcon from "@iconify-icons/cib/github";
import mediumM from "@iconify-icons/cib/medium-m";
import instagramIcon from "@iconify-icons/cib/instagram";

import grid from "../styles/images/grid.png";
import foto from "../styles/images/me.jpg";
import tape from "../styles/images/tape.png";
import flower from "../styles/images/dry-flower.png";
import Typewriter from "../components/Typewriter";
import { Malik } from "../components/malik";
import { CVButton } from "../components/cvButton";
import { CustomBox } from "../components/icon";

export const Home: React.FC = () => {
  const bg = useColorModeValue("white", themes.colors.d_brown);
  const color = useColorModeValue(themes.colors.d_brown, "white");
  const [hover, setHover] = useState(false);

  return (
    <Center
      bgColor={bg}
      bgImage={`url(${grid})`}
      backgroundRepeat="repeat"
      css={{ "background-blend-mode": "multiply" }}
      height={window.innerHeight}
    >
      <Wrap>
        <Box textAlign="center" width="800px">
          <Image
            src={foto}
            alt="Annisa Malik"
            height={350}
            zIndex={0}
            borderRadius="15px"
            position="absolute"
            mt={(window.innerHeight - 350 - 56) / 2}
          />
          <Image
            src={tape}
            alt="tape"
            height={73}
            zIndex={1}
            position="absolute"
            mt={(window.innerHeight - 73 - 56) / 2}
            ml="-120px"
            transform="rotate(-82.45deg)"
          />
          <Image
            src={flower}
            alt="tape"
            height={530}
            zIndex={1}
            position="absolute"
            mt={(window.innerHeight - 530 - 56) / 2}
            ml="630px"
          />

          <VStack spacing={8}>
            <Grid
              zIndex={2}
              w="500px"
              ml="230px"
              templateColumns="repeat(4, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={1} colSpan={4}>
                <VStack align="left" spacing={0}>
                  <Text
                    align="left"
                    fontFamily={themes.fonts.quicksand}
                    fontSize="36px"
                  >
                    Hello there,
                  </Text>
                  <Malik></Malik>

                  <Typewriter
                    inputStrings={[
                      "Front End Developer",
                      "I am Creative.",
                      "I Love Design.",
                      "I Love to Develop.",
                    ]}
                  />
                </VStack>
              </GridItem>
              <Box colSpan={1}>
                <Divider mt="20px" />
              </Box>
              <GridItem colSpan={3}>
                <VStack align="left" spacing={6} textAlign="left">
                  <p>
                    <a
                      style={{
                        textAlign: "left",
                        fontFamily: `${themes.fonts.quicksand}`,
                        fontSize: "16px",
                        flex: "1",
                        lineHeight: "1.2",
                        backgroundImage:
                          "linear-gradient(to right, #FFF0DA 0, #FFF0DA 100%)",
                        backgroundPosition: "0 0.2em",
                        backgroundSize: "0 100%",
                        backgroundRepeat: "no-repeat",
                        transition: "background .5s",
                        boxShadow: "inset 0 -.5em 0 0 white",
                        ...(hover && { backgroundSize: "100% 100%" }),
                      }}
                      onMouseEnter={() => {
                        setHover(true);
                      }}
                      onMouseLeave={() => {
                        setHover(false);
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam ornare, dui ac commodo accumsan, justo purus feugiat
                      ex, sit amet feugiat lectus sem dictum risus. Proin a orci
                      a dolor convallis gravida.
                    </a>
                  </p>
                  <HStack spacing={5}>
                    <CustomBox label="Mail Me!">
                      <Icon icon={gmailIcon} />
                    </CustomBox>
                    <CustomBox label="Linked In">
                      <Icon icon={linkedinRect} />
                    </CustomBox>
                    <CustomBox label="Code Resp">
                      <Icon icon={githubIcon} />
                    </CustomBox>
                    <CustomBox label="">
                      <Icon icon={twitterBird} />
                    </CustomBox>
                    <CustomBox label="Social">
                      <Icon icon={instagramIcon} />
                    </CustomBox>
                  </HStack>
                  <Spacer></Spacer>
                  <CVButton></CVButton>
                </VStack>
              </GridItem>
            </Grid>
          </VStack>
        </Box>
      </Wrap>
    </Center>
  );
};
