import CompanyReviews from "./components/companyReviews";
import PersonalJobDashBoard from "./components/dashboard/personalJobDashboard";
import React from "react";
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/companyReviews" element={<CompanyReviews />}/>
        <Route path="/personalJobDashBoard" element={<PersonalJobDashBoard />}/>              
      </Routes>
    </div>
  </BrowserRouter>
  );
 };
 
export default App;
