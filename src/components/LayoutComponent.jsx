import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import FooterComponent from "./FooterComponent/FooterComponent";

const LayoutComponent = ({ children }) => {
  const { Content } = Layout;
  return (
    <>
      <HeaderComponent />
      <Content>
        <div
          className="site-layout-content"
          style={{
            background: "#",
          }}
        >
          {children}
        </div>
      </Content>
      <FooterComponent />
    </>
  );
};

export default LayoutComponent;
