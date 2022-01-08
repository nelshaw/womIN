import React from 'react';
import "./sidebar.css";
import { AccountCircle, Home, RateReview } from '@material-ui/icons';

export default function Sidebar(){
    return(
        <div className ="sidebar">
            <div className ="sidebarWrapper">
                <div class= "sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className= "sidebarList">
                        <li className="sidebarListItem active">
                            <Home className="sidebarIcon"/>   
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <RateReview className="sidebarIcon"/>   
                            Company Reviews
                        </li>
                        <li className="sidebarListItem">
                            <AccountCircle className="sidebarIcon"/>   
                            Personal Dashboard
                        </li>
                    </ul>
                    
                </div>
                <div class= "sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className= "sidebarList">
                        <li className="sidebarListItem active">
                            <Home className="sidebarIcon"/>   
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <RateReview className="sidebarIcon"/>   
                            Company Reviews
                        </li>
                        <li className="sidebarListItem">
                            <AccountCircle className="sidebarIcon"/>   
                            Personal Dashboard
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}