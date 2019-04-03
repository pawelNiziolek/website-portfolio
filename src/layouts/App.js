import React, { Component } from "react";
import Nav from "../layouts/Nav";
import Page from "../layouts/Page";
import Footer from "../layouts/Footer";
import { HashRouter } from "react-router-dom";
import "../styles/App.css";

class App extends Component {
  getConfirmation(message, callback) {
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }

  render() {
    return (
      <HashRouter getUserConfirmation={this.getConfirmation}>
        <div className="wrap-all">
          <header>{<Nav />}</header>
          <main>{<Page />}</main>
          <footer>{<Footer />}</footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
