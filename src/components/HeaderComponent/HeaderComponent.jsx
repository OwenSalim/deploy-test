import React from "react";
import { Layout, Button } from "antd";
import "./headerComponents.css";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const { Header } = Layout;
  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          backgroundColor: "white",
          height: "90px",
          paddingTop: "18px",
          boxShadow: "0px 0px 3px 0px black",
        }}
      >
        <div className="header-layout">
          <div className="headerWrapper">
            <div className="menu">
              <Link to="/" className="link">
                Homepage
              </Link>
              <Link to="/aboutme" className="link">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default HeaderComponent;
