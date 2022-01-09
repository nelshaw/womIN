import React from "react";
import "./sidebar.css";
import { AccountCircle, Home, RateReview } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  let navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/login", { replace: true });
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div class="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="sidebarLink">
              <li className="sidebarListItem">
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/login" className="sidebarLink">
              <li className="sidebarListItem">
                <AccountCircle className="sidebarIcon" />
                Login
              </li>
            </Link>
            <Link to="/companyReviews" className="sidebarLink">
              <li className="sidebarListItem">
                <RateReview className="sidebarIcon" />
                Company Reviews
              </li>
            </Link>
            <Link to="/personalJobDashBoard" className="sidebarLink">
              <li className="sidebarListItem">
                <AccountCircle className="sidebarIcon" />
                Personal Dashboard
              </li>
            </Link>
            <Link to="/network" className="sidebarLink">
              <li className="sidebarListItem">
                <AccountCircle className="sidebarIcon" />
                Network
              </li>
            </Link>
            <span className="sidebarLink logoutBtn" onClick={logout}>
              <li className="sidebarListItem">
                <AccountCircle className="sidebarIcon" />
                Logout
              </li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}
