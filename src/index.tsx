import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import GlobalStyle from "./styles/global/global-style";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
