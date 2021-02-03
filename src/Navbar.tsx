import * as React from "react";
import {
  Flex,
  Spacer,
  Text,
  Box,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { Icon, InlineIcon } from "@iconify/react";
import codeFilled from "@iconify/icons-ant-design/code-filled";
import themes from "./styles/theme";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import menu from "./styles/images/menu-on.png";
import "./styles/main.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

interface IProps {
  children: React.ReactNode;
  page: string;
}
const NavLinks = ({ children, page, ...props }: IProps) => (
  <Link {...props}>{children}</Link>
);

export const Navbar: React.FC = () => {
  const bg = useColorModeValue("white", themes.colors.d_brown);
  const color = useColorModeValue(themes.colors.d_brown, "white");

  return (
    <Router>
      <Flex
        zIndex={5}
        pos="sticky"
        as="nav"
        bg={bg}
        w="100%"
        top={0}
        px={5}
        py={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flexDirection="row" justifyContent="left" alignItems="center">
          <Icon icon={codeFilled} style={{ color: color, fontSize: "30px" }} />
          <Text pl={1} color={color} fontFamily={themes.fonts.abril}>
            annisamalik
          </Text>
        </Flex>
        <Box ml={5}>
          <NavLink
            activeClassName="navigationActive"
            className="navigation"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="navigationActive"
            className="navigation"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            activeClassName="navigationActive"
            className="navigation"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            activeClassName="navigationActive"
            className="navigation"
            to="/contact"
          >
            Contact Me
          </NavLink>
        </Box>
        <Spacer />
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
