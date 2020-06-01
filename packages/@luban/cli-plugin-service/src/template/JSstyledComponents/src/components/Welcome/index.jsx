import React from "react";
import PropTypes from "prop-types";

<%_ if (useStore) { _%>
import { Todo } from "../Todo";
<%_ } _%>

import logo from "./../../assets/logo.svg";

import { AppWrapper, GlobalStyle } from "./index.css";

const Welcome = ({ pageName }) => (
  <AppWrapper>
    <header className="App-header">
      <%_ if (useStore) { _%>
      <Todo />
      <%_ } _%>
      <h2>
        This is&nbsp;
        {pageName}
        &nbsp;page
      </h2>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <span role="img" aria-label="keyboard">
          ⌨️&nbsp;
        </span>
        Edit&nbsp;
        <code><%= modifyFile %></code>
        &nbsp;and save to reload.
      </p>
      <a
        className="App-link"
        href="https://luban.now.sh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span role="img" aria-label="link">
          🔗&nbsp;
        </span>
        Visit more about Luban documentation.
      </a>
    </header>

    <GlobalStyle />
  </AppWrapper>
);

Welcome.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export { Welcome };
