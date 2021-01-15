import React from "react";
import { Wrap, Text, keyframes } from "@chakra-ui/react";
import themes from "../styles/theme";

interface Props {
  inputStrings: Array<String>;
}
interface State {
  typeColor: {
    color: string;
  };
  typed: String;
  isDeleting: boolean;
  loopNum: number;
}

export default class Typewriter extends React.Component<Props, State> {
  state = {
    typeColor: {
      color: "#A4713C",
    },
    typed: "",
    loopNum: 0,
    isDeleting: false,
  };

  componentDidMount() {
    this.typeWriter(this.props.inputStrings);
  }

  stringChecker(string: String) {
    if (
      string === "Creative." ||
      string === "Develop." ||
      string === "Design."
    ) {
      this.setState({
        typeColor: { color: "#4AD0A0" },
      });
    } else {
      this.setState({
        typeColor: { color: "#A4713C" },
      });
    }
  }

  typeWriter(sentences: Array<String>) {
    var i = this.state.loopNum % sentences.length;
    var sentence = sentences[i];

    let currentHuruf = this.state.typed.length;

    let kata = sentence.split(" ");
    let j = [];
    let sum = 0;
    for (let k = 0; k < kata.length; k++) {
      if (sum > 0) j.push(sum);
      if (k != kata.length - 1) sum = kata[k].length + sum + 1;
      else sum = kata[k].length + sum;
    }
    let k = 0;
    while (currentHuruf > j[k]) {
      k++;
    }
    this.stringChecker(kata[k]);

    if (this.state.isDeleting) {
      this.setState((state, props) => ({
        typed: sentence.substring(0, state.typed.length - 1),
      }));
    } else {
      this.setState((state, props) => ({
        typed: sentence.substring(0, state.typed.length + 1),
      }));
    }

    var delta = 300 - Math.random() * 100;

    if (this.state.isDeleting) {
      delta /= 2;
    }

    if (!this.state.isDeleting && this.state.typed === sentence) {
      this.setState(() => ({ isDeleting: true }));
    } else if (this.state.isDeleting && this.state.typed === "") {
      this.setState(() => ({ isDeleting: false }));
      this.setState((state) => ({ loopNum: state.loopNum + 1 }));
    }

    setTimeout(() => this.typeWriter(sentences), delta);
  }

  render() {
    const blink = keyframes`
    0%{opacity: 0;}
	  100%{opacity: 1;}
`;
    return (
      <Wrap>
        <span style={this.state.typeColor}>
          <Text
            align="left"
            fontFamily={themes.fonts.quicksand}
            fontSize="26px"
            ml={1}
            _after={{
              content: `"|"`,
              animation: `${blink} 500ms linear infinite alternate`,
            }}
          >
            {this.state.typed}
          </Text>
        </span>
      </Wrap>
    );
  }
}
