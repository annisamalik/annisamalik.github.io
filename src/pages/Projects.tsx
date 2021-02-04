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
  IconButton,
  Badge,
  Tag,
} from "@chakra-ui/react";
import themes from "../styles/theme";
import { Icon } from "@iconify/react";
import { ExternalLinkIcon, QuestionIcon } from "@chakra-ui/icons";
import grid from "../styles/images/grid.png";
import codeSlash from "@iconify-icons/bi/code-slash";

interface IProps {
  project: {
    imageUrl: string;
    imageAlt: string;
    title: String;
    category: String;
    desc: String;
    tech: Array<string>;
  };
}

const ProjectItem = ({ project, ...props }: IProps) => (
  <Box
    maxW="300px"
    minW="100px"
    minH="430px"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    backgroundColor={themes.colors.creame}
    margin="10px"
  >
    <Image maxH={200} src={project.imageUrl} alt={project.imageAlt} />

    <Box d="grid" p="4" minH="230px">
      <Box d="flex" alignItems="baseline">
        <Text fontFamily={themes.fonts.quicksand} fontSize={12}>
          {project.category}
        </Text>
      </Box>

      <Box mt="1" fontFamily={themes.fonts.abril} isTruncated fontSize={18}>
        {project.title}
      </Box>

      <Box fontSize={12} fontFamily={themes.fonts.quicksand}>
        {project.desc}
      </Box>

      <Box
        d="flex"
        alignItems="center"
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        alignContent="flex-start"
      >
        {Array(project.tech.length)
          .fill("")
          .map((_, i) => (
            <Tag
              borderRadius="full"
              px="2"
              colorScheme="teal"
              fontFamily={themes.fonts.quicksand}
              fontSize={12}
              mr={2}
              mt={2}
              size="sm"
            >
              {project.tech[i]}
            </Tag>
          ))}
      </Box>
      <HStack d="flex" spacing={3} mt={2} alignSelf="flex-end">
        <Spacer />
        <Button rightIcon={<QuestionIcon />}>Details</Button>
        <IconButton aria-label="visit" icon={<ExternalLinkIcon />} />
        <IconButton
          aria-label="visit"
          icon={<Icon aria-label="code" icon={codeSlash} />}
        />
      </HStack>
    </Box>
  </Box>
);

export const Projects: React.FC = () => {
  const bg = useColorModeValue("white", themes.colors.d_brown);
  const color = useColorModeValue(themes.colors.d_brown, "white");

  const exa = [
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      title: "Grocery List App",
      category: "MOBILE APP",
      desc: "Track your food consumption and stock",
      tech: ["React Native", "Javascript", "GraphQl"],
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Skin",
      title: "Skincare Journey",
      category: "WEB APP",
      desc:
        "A web where you share your skin journey to find the best one for you!",
      tech: ["React", "Javascript", "GraphQl", "TypeScript"],
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Skin",
      title: "Sistem Antrean Online",
      category: "MOBILE APP",
      desc: "An app to provide online queue in a hospital",
      tech: ["React Native", "Javascript", "GraphQl", "TypeScript"],
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Skin",
      title: "Wallflower Bloom",
      category: "WEB APP",
      desc: "A landing page of visual novel",
      tech: ["HTML", "Javascript", "CSS", "Monogatari"],
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Skin",
      title: "Sentence Similarity",
      category: "WEB APP",
      desc: "A web to compare whether a sentence is similar or not",
      tech: ["HTML", "Javascript", "CSS", "Python"],
    },
    {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Skin",
      title: "Aspect Extraction of Beauty Products",
      category: "WEB APP",
      desc: "A web to extract aspect in beauty products",
      tech: ["HTML", "Javascript", "CSS", "Python"],
    },
  ];
  return (
    <ChakraProvider theme={themes}>
      <Center
        bgColor={bg}
        bgImage={`url(${grid})`}
        backgroundRepeat="repeat"
        css={{ "background-blend-mode": "multiply" }}
        minH={window.innerHeight}
      >
        <Box textAlign="left" width="960px">
          <Text fontSize="36px" fontFamily={themes.fonts.abril} mt={58}>
            Projects
          </Text>
          <Flex flexWrap="wrap">
            {Array(exa.length)
              .fill("")
              .map((_, i) => (
                <ProjectItem project={exa[i]}></ProjectItem>
              ))}
          </Flex>
        </Box>
      </Center>
    </ChakraProvider>
  );
};
