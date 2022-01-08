import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import CompanyReviews from "./components/companyReviews";
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";
import Login from "./components/login";
import PersonalJobDashBoard from "./components/personalJobDashboard";
import SignUp from "./components/signUp";
import Topbar from "./components/topbar/topbar";

import "./App.css"

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
      <Topbar />
      <div class="container">
        <Sidebar/>
        <Home/>
        
      </div>
      
    </Router>
  );
};


export default AppWrapper;
