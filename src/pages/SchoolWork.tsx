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
  Stack,
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

export const SchoolWork: React.FC = () => {
  const bg = useColorModeValue("white", themes.colors.d_brown);
  const color = useColorModeValue(themes.colors.d_brown, "white");

  return (
    <ChakraProvider theme={themes}>
      <Center backgroundColor={themes.colors.l_br3}>
        <Stack d="flex" flexWrap="wrap">
          <Button>MBD</Button>
          <Button>Siap Bencana</Button>
          <Button>Language Theory and Automata</Button>
          <Button>SBD</Button>
          <Button>DAA</Button>
          <Button>Basic Simulation Modelling</Button>
          <Button>WebDevelopment</Button>
          <Button>Antean</Button>
          <Button>Artificial Intelligence</Button>
          <Button>Data Visualization</Button>
          <Button>Data Mining</Button>
          <Button>Machine Learning</Button>
          <Button>Natural Langueage Processing</Button>
          <Button>RecSys</Button>
        </Stack>
      </Center>
    </ChakraProvider>
  );
};
