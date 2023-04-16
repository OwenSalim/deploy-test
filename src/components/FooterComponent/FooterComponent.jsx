import React from "react";
import { Layout } from "antd";
import "./footerComponent.css";

const FooterComponent = () => {
  const { Footer } = Layout;
  return (
    <>
      <Footer className="footer">
        <h1>Test Footer</h1>
      </Footer>
    </>
  );
};

export default FooterComponent;
