import React, { Component, Fragment } from "react";
import GlobalStyles from "styles/globals";

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <div className="App">
          <h2>Hacker News Clone</h2>
        </div>
      </Fragment>
    );
  }
}

export default App;
