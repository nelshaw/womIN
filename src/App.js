import CompanyReviews from "./components/companyReviews";
import PersonalJobDashBoard from "./components/dashboard/personalJobDashboard";
import React, { useState, useEffect } from "react";
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";
import Login from "./components/login/login";
import SignUp from "./components/signup/signUp";
import Network from "./components/network/network";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Profile from "./components/profile/profile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLogin = () => {
    const user = localStorage.getItem("userInfo");
    if (user) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        {isLoggedIn ? (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/companyReviews" element={<CompanyReviews />} />
            <Route
              path="/personalJobDashBoard"
              element={<PersonalJobDashBoard />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/network" element={<Network />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
