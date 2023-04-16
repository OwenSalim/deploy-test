import React, { Suspense } from "react";
import LayoutComponent from "../components/LayoutComponent";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutMe from "../pages/AboutMe/AboutMe";

const RouterManagement = () => {
  return (
    <>
      <Suspense>
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
        </LayoutComponent>
      </Suspense>
    </>
  );
};

export default RouterManagement;
