import React from "react";
import {
  SlideFade,
  Box,
  VStack,
  Grid,
  GridItem,
  Text,
  keyframes,
  Center,
  Link,
} from "@chakra-ui/react";
import themes from "../styles/theme";
import { Icon } from "@iconify/react";

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

interface IProps {
  socialMedia: (string | IconifyIcon)[];
}

export const SocialButton = ({ socialMedia }: IProps) => {
  const pulse = keyframes`
  0% { transform: scale(.95); } 
  50% { transform: scale(1); box-shadow: 0 0 0 20px rgba(51, 249, 196, 0);  }
  100% { transform: scale(.95); box-shadow: 0 0 0 0 rgba(51, 249, 196, 0); }`;

  return (
    <SlideFade in={true} offsetY="20px">
      <Link>
        <Box
          width="100%"
          bgColor={themes.colors.l_br1}
          borderRadius={15}
          border="2px solid"
          p="10px"
          borderColor={themes.colors.light_green}
          _hover={{
            transform: "translateX(20px)",
          }}
        >
          <Grid
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={4}
          >
            <GridItem colSpan={2}>
              <VStack textAlign="left" align="left">
                <Text
                  fontSize={25}
                  fontFamily={themes.fonts.abril}
                  color="white"
                  mb={-2}
                  mt={-2}
                >
                  {" "}
                  {socialMedia[0]}
                </Text>
                <Text
                  fontSize={12}
                  fontFamily={themes.fonts.quicksand}
                  color={themes.colors.dark_green}
                >
                  {socialMedia[1]}
                </Text>
              </VStack>
            </GridItem>
            <GridItem colSpan={1}>
              <Center>
                <Icon
                  icon={socialMedia[2] as IconifyIcon}
                  style={{
                    color: themes.colors.l_br2,
                    fontSize: 36,
                    display: "inline",
                  }}
                />
              </Center>
            </GridItem>
          </Grid>
        </Box>
      </Link>
    </SlideFade>
  );
};
