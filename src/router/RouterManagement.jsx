import React, { Suspense } from "react";
import LayoutComponent from "../components/LayoutComponent";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

const RouterManagement = () => {
  return (
    <>
      <Suspense>
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </LayoutComponent>
      </Suspense>
    </>
  );
};

export default RouterManagement;
