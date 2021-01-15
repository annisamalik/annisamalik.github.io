import * as React from "react";
import {
  Wrap,
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
  Stack,
  Divider,
  StackDivider,
  Tag,
  Tab,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
  Spacer,
} from "@chakra-ui/react";
import themes from "../styles/theme";
import { WorkExp } from "../components/WorkExperience";
import { Icon, InlineIcon } from "@iconify/react";
import universityIcon from "@iconify/icons-map/university";
import codeReview16 from "@iconify/icons-octicon/code-review-16";
import baselineWork from "@iconify/icons-ic/baseline-work";
import organizationIcon from "@iconify-icons/codicon/organization";
import workshopIcon from "@iconify-icons/grommet-icons/workshop";
import journalCode from "@iconify-icons/bi/journal-code";
import eventsIcon from "@iconify-icons/carbon/events";

import s1 from "../styles/images/S1.jpg";
import vutura from "../styles/images/vutura.jpg";
import "../styles/main.css";

//<Icon icon={workshopIcon} /> <Icon icon={organizationIcon} /> <Icon icon={journalCode} /> <Icon icon={eventsIcon} />

export const About: React.FC = () => {
  const bg = useColorModeValue("white", themes.colors.d_brown);
  const color = useColorModeValue(themes.colors.d_brown, "white");
  const works = [
    [
      "img/vutura.jpg",
      "Vutura.io",
      "https://vutura.io/",
      "June 2020 - July 2020",
      "AI Engineer Intern",
      "desc",
    ] as string[],
    [
      "img/vutura.jpg",
      "Vutura.io",
      "https://vutura.io/",
      "June 2020 - July 2020",
      "AI Engineer Intern",
      "desc",
    ] as string[],
  ];
  const colleagues = [
    [["person Name", "jabatan", "linkedin", "picture"]],
    [["person Name", "jabatan", "linkedin", "picture"]],
  ];

  return (
    <ChakraProvider theme={themes}>
      <Center backgroundColor={themes.colors.creame}>
        <Tabs
          variant="unstyled"
          orientation="vertical"
          width={window.innerWidth * 0.72}
          defaultIndex={0}
          zIndex={1}
          padding="90px 0 90px 0"
        >
          <TabList width="400px">
            <Text
              fontSize="36px"
              textAlign="left"
              fontFamily={themes.fonts.abril}
              color={themes.colors.l_brown}
              mt="65px"
              mb={5}
            >
              About
            </Text>
            <VStack align="left" spacing={7}>
              <Tab>
                <Icon
                  icon={universityIcon}
                  style={{ fontSize: "24px", marginRight: "10px" }}
                />
                Education
              </Tab>
              <Tab>
                <Icon
                  icon={baselineWork}
                  style={{ fontSize: "24px", marginRight: "10px" }}
                />
                Work Experience
              </Tab>
              <Tab>
                <Icon
                  icon={codeReview16}
                  style={{ fontSize: "24px", marginRight: "10px" }}
                />
                Skills
              </Tab>
            </VStack>
          </TabList>
          <TabPanels
            borderLeft="1px"
            p="58px 20px 58px 20px"
            ml="25px"
            borderColor={themes.colors.d_brown}
          >
            <TabPanel>
              <VStack
                fontFamily={themes.fonts.lato}
                color={themes.colors.d_brown}
                fontSize={16}
                textAlign="left"
                align="left"
                spacing={5}
              >
                <HStack>
                  <Image
                    src={s1}
                    alt="Telkom University"
                    height="105px"
                    width="105px"
                    border="3px solid rgba(77, 42, 23, 0.6)"
                    boxSizing="border-box"
                    borderRadius="50%"
                    ml={2}
                    mr={2}
                  />
                  <HStack>
                    <VStack textAlign="left" align="left" w="45%">
                      <Text as="b" color={themes.colors.dark_brown}>
                        Telkom University
                      </Text>
                      <Text>July 2017 – March 2021</Text>
                      <Text>GPA: 3.89/4.0</Text>
                    </VStack>
                    <VStack textAlign="left" align="left">
                      <HStack mt={-2}>
                        <Text as="b" color={themes.colors.dark_brown}>
                          Bachelor Thesis
                        </Text>
                        <Button height={19} fontSize={12}>
                          DETAILS
                        </Button>
                      </HStack>
                      <Text as="i">
                        “Aspect term-polarity co-extraction in beauty products”
                      </Text>
                    </VStack>
                  </HStack>
                </HStack>
                <Text textAlign={"justify"}>
                  Taking concentration in expertise group of Intelligence,
                  Computing, and Multimedia. Specifically, in Machine
                  Intelligence. My coursework has provided me with a strong
                  foundation of analytical thinking and algorithm. During my
                  time as a student, I have spent my time in organization and
                  community to build my soft skill.
                </Text>
                <Text as="b" color={themes.colors.dark_brown}>
                  Elective Courses
                </Text>
                <Stack
                  display="flex"
                  flexWrap="wrap"
                  direction={["column", "row"]}
                  justifyContent="flex-start"
                  alignContent="flex-start"
                  spacing={0}
                >
                  <Button>Data Mining</Button>
                  <Button>Natural Language Processing</Button>
                  <Button>Recommendation System</Button>
                  <Button>Data Visualization</Button>
                </Stack>
                <Text as="b" textAlign="left" color={themes.colors.dark_brown}>
                  What I did in University
                </Text>

                <HStack
                  fontFamily={themes.fonts.quicksand}
                  fontSize={12}
                  as="b"
                  align="left"
                  spacing={10}
                >
                  <VStack align="center">
                    <Center className="story">
                      <Icon icon={organizationIcon} />
                    </Center>
                    <Text>Organization</Text>
                  </VStack>
                  <VStack>
                    <Center>
                      <div className="story">XP</div>
                    </Center>
                    <Text>Experience</Text>
                  </VStack>
                  <VStack>
                    <Center className="story">
                      <Icon icon={workshopIcon} />
                    </Center>
                    <Text>Workshop</Text>
                  </VStack>
                  <VStack align="center">
                    <Center className="story">
                      <Icon icon={eventsIcon} align="center" />
                    </Center>
                    <Text>Seminar</Text>
                  </VStack>
                  <VStack>
                    <Center className="story">
                      <Icon icon={journalCode} />{" "}
                    </Center>
                    <Text>Scool Work</Text>
                  </VStack>
                </HStack>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack
                fontFamily={themes.fonts.lato}
                color={themes.colors.d_brown}
                fontSize={16}
                textAlign="left"
                align="left"
                spacing={5}
              >
                {Array(works.length)
                  .fill("")
                  .map((_, i) => (
                    <WorkExp
                      workHistory={works[i] as string[]}
                      colleagues={colleagues[i] as string[][]}
                    ></WorkExp>
                  ))}
              </VStack>
            </TabPanel>
            <TabPanel>2020</TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </ChakraProvider>
  );
};
