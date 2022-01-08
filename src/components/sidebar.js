import React from 'react';
 import "./sidebar.css";

 export default function Sidebar(){
     return(
         <div className ="sidebar">
             <div className ="sidebarWrapper">
                 <div class= "sidebarMenu">
                     <h3 className="sidebarTitle">Dashboard</h3>
                     <ul className= "sidebarList">
                         <li className="sidebarListItem active">
                             Home
                         </li>
                         <li className="sidebarListItem">
                             Company Reviews
                         </li>
                         <li className="sidebarListItem">
                             Personal Dashboard
                         </li>
                     </ul>

                 </div>
                 <div class= "sidebarMenu">
                     <h3 className="sidebarTitle">Quick Menu</h3>
                     <ul className= "sidebarList">
                         <li className="sidebarListItem active">
                             Home
                         </li>
                         <li className="sidebarListItem">
                             Company Reviews
                         </li>
                         <li className="sidebarListItem">
                             Personal Dashboard
                         </li>
                     </ul>

                 </div>
             </div>
         </div>
     )
 } 