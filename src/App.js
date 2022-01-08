import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import CompanyReviews from "./components/companyReviews";
import Home from "./components/home";
import Login from "./components/login/login";
import PersonalJobDashBoard from "./components/personalJobDashboard";
import SignUp from "./components/signup/signUp";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/companyReviews", element: <CompanyReviews /> },
    { path: "/personalJobDashBoard", element: <PersonalJobDashBoard /> },
    { path: "/signUp", element: <SignUp /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
