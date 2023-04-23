import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LayoutComponent from "../components/layouts/LayoutComponent";
import FormComponent from "../pages/FormComponent/FormComponent";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";
import LoginPage from "../pages/LoginPage/LoginPage";
import AboutMe from "../pages/AboutMe/AboutMe";
import FormExp from "../pages/FormExp/FormExp";
import OwenCrud from "../pages/OwenCrud/OwenCrud";

const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <Suspense fallback={<LoadingComponent />}>
      {!token ? (
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      ) : (
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/formcomponent" element={<FormComponent />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/aboutme/:id" element={<AboutMe />} />
            <Route path="/formexp" element={<FormExp />} />
            <Route path="/owencrud" element={<OwenCrud />} />
          </Routes>
        </LayoutComponent>
      )}
    </Suspense>
  );
};

export default RouteManagement;
