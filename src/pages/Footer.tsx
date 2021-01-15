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
  Badge,
} from "@chakra-ui/react";
import themes from "../styles/theme";
import { Icon, InlineIcon } from "@iconify/react";
import codeFilled from "@iconify/icons-ant-design/code-filled";

export const Footer: React.FC = () => {
  const bg = useColorModeValue("white", themes.colors.d_brown);
  const color = useColorModeValue(themes.colors.d_brown, "white");

  return (
    <ChakraProvider theme={themes}>
      <Center bgColor={bg} color={color} padding={10}>
        <HStack>
          <Text fontStyle={themes.fonts.quicksand}>© 2020</Text>
          <Icon icon={codeFilled} style={{ color: color, fontSize: "30px" }} />
          <Text pl={1} fontFamily={themes.fonts.abril}>
            annisamalik
          </Text>
        </HStack>
      </Center>
    </ChakraProvider>
  );
};
