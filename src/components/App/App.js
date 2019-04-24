import React, { Component, Fragment } from "react";
import GlobalStyles from "styles/globals";
import { ThemeProvider } from "styled-components";
import { colorsDark } from "styles/palette";
import List from "components/List";
import { Wrapper, Title } from "./styles";
class App extends Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
    console.log(this.props);
  }
  render() {
    const { stories } = this.props;
    return (
      <Fragment>
        <GlobalStyles />
        <ThemeProvider theme={colorsDark}>
          <div>
            <Wrapper>
              <Title>Heacker News Reader</Title>
              <List stories={stories} />
            </Wrapper>
          </div>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;
