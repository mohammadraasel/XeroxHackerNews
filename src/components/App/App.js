import React, { Component, Fragment } from "react";
import InfiniteScroll from "react-infinite-scroller";
import GlobalStyles from "styles/globals";
import { ThemeProvider } from "styled-components";
import { colorsDark } from "styles/palette";
import List from "components/List";
import Loader from "components/Loader";
import { Wrapper, Title } from "./styles";
class App extends Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
    console.log(this.props);
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };
  render() {
    const { stories, hasMoreStories } = this.props;
    return (
      <Fragment>
        <GlobalStyles />
        <ThemeProvider theme={colorsDark}>
          <div>
            <Wrapper>
              <Title>Hacker News Reader</Title>
              <InfiniteScroll
                pageStart={0}
                loadMore={this.fetchStories}
                hasMore={hasMoreStories}
                loader={<Loader />}
              >
                <List stories={stories} />
              </InfiniteScroll>
            </Wrapper>
          </div>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;
