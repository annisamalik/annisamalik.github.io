import * as React from "react";
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
  Input,
  Textarea,
  FormLabel,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Wrap,
  useToast,
} from "@chakra-ui/react";
import themes from "../styles/theme";
import { Icon } from "@iconify/react";
import mediumM from "@iconify-icons/cib/medium-m";
import instagramIcon from "@iconify-icons/cib/instagram";
import socialLinkedin from "@iconify/icons-simple-line-icons/social-linkedin";
import githubLine from "@iconify/icons-ri/github-line";
import { SocialButton } from "../components/SocialButton";
import { CustomBox } from "../components/icon";
import bgFlower from "../styles/images/bgFlowerH.jpg";

interface IconifyIcon {
  body: string;
  left?: number;
  top?: number;
  width?: number;
  height?: number;
  rotate?: number;
  hFlip?: boolean;
  vFlip?: boolean;
}

export const Contact: React.FC = () => {
  const bg = useColorModeValue("white", themes.colors.d_brown);
  const color = useColorModeValue(themes.colors.d_brown, "white");
  const socialMedia = [
    ["Linkedin", "Professional social profile", socialLinkedin],
    ["Github", "Code portofolio profile", githubLine],
    ["Medium", "Work case study", mediumM],
    ["Instagram", "Image base social communications", instagramIcon],
  ];
  const toast = useToast();

  return (
    <ChakraProvider theme={themes}>
      <Box
        position="absolute"
        height="200px"
        bgImage={`url(${bgFlower})`}
        backgroundSize="auto 350px"
        bgRepeat="repeat"
        width="100%"
        zIndex={1}
      ></Box>
      <Center backgroundColor={themes.colors.l_br3}>
        <Box
          width={window.innerWidth * 0.72}
          bgColor={themes.colors.creameContact}
          borderRadius={25}
          padding="48px 65px 48px 65px"
          margin="100px 0 100px 0"
          zIndex={2}
        >
          <HStack spacing={6}>
            <Text
              fontSize="36px"
              fontFamily={themes.fonts.abril}
              color={themes.colors.l_brown}
            >
              Contact Me
            </Text>
            <Spacer />
            {Array(socialMedia.length)
              .fill("")
              .map((_, i) => (
                <CustomBox>
                  <Icon icon={socialMedia[i][2] as IconifyIcon} />
                </CustomBox>
              ))}
          </HStack>
          <HStack>
            <form>
              <VStack spacing={2} align="left">
                <HStack spacing={5}>
                  <FormControl id="first-name" isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input variant="filled" placeholder="First Name" />
                  </FormControl>
                  <FormControl id="last-name" isRequired>
                    <FormLabel>Last name</FormLabel>
                    <Input variant="filled" placeholder="Last Name" />
                  </FormControl>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input variant="filled" placeholder="Your Email Address" />
                </FormControl>
                <FormControl id="message" isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    resize="vertical"
                    height="200px"
                    placeholder="Here is a sample placeholder"
                  />
                </FormControl>
                <HStack align="right">
                  <Spacer />
                  <Wrap>
                    <Button
                      //rightIcon={<GrSend />}
                      borderRadius={50}
                      type="submit"
                      onClick={() =>
                        toast({
                          title: "Message sent!",
                          description: "Your message will be in my inbox.",
                          status: "success",
                          duration: 9000,
                          isClosable: true,
                        })
                      }
                    >
                      SEND
                    </Button>
                  </Wrap>
                </HStack>
              </VStack>
            </form>
            <VStack>asas</VStack>
          </HStack>
        </Box>
      </Center>
    </ChakraProvider>
  );
};
