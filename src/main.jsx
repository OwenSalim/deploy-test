import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/apollo-clinet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <ConfigProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </ApolloProvider>
);
