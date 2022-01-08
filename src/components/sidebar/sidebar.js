import React from 'react';
import "./sidebar.css";
import { AccountCircle, Home, RateReview } from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Sidebar(){
    return(
        <div className ="sidebar">
            <div className ="sidebarWrapper">
                <div class= "sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className= "sidebarList">
                        <Link to="/" className="sidebarLink">
                            <li className="sidebarListItem active">
                                <Home className="sidebarIcon"/>   
                                Home
                            </li>
                        </Link>
                        <Link to="/companyReviews" className="sidebarLink">
                            <li className="sidebarListItem">
                                <RateReview className="sidebarIcon"/>   
                                Company Reviews
                            </li>
                        </Link>
                        <Link to="/personalJobDashBoard" className="sidebarLink">
                            <li className="sidebarListItem">
                                <AccountCircle className="sidebarIcon"/>   
                                Personal Dashboard
                            </li>
                        </Link> 
                    </ul>
                </div>
                <div class= "sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className= "sidebarList">
                        <Link to="/" className="sidebarLink">
                            <li className="sidebarListItem active">
                                <Home className="sidebarIcon"/>   
                                Home
                            </li>
                        </Link>
                        <Link to="/companyReviews" className="sidebarLink">
                            <li className="sidebarListItem">
                                <RateReview className="sidebarIcon"/>   
                                Company Reviews
                            </li>
                        </Link>
                        <Link to="/personalJobDashBoard" className="sidebarLink">
                            <li className="sidebarListItem">
                                <AccountCircle className="sidebarIcon"/>   
                                Personal Dashboard
                            </li>
                        </Link> 
                    </ul>
                </div>
            </div>
        </div>
    )
}