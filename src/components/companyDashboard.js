import React from "react";
 import "./networkWidget.css";
 import {Person} from "@material-ui/icons";

 export default function NetworkWidget(){
     return(
         <div className="networkWidget">
             <span className="title">Network</span>
             <ul className="connectionList">
                 <li className="connection">
                 {/* <img src="image.jp" alt="" className="image"/> */}
                 <div className="userInfo">
                     <span className="name">Sarah Sawan</span>
                     <span className="role">Role: SWE</span>
                 </div>
                 <button className="button">
                     <Person className="icon"/>
                 </button>
                 </li>
                 <li className="connection">
                 {/* <img src="" alt="" className="image"/> */}
                 <div className="userInfo">
                     <span className="name">Nadeen</span>
                     <span className="role">Role: SWE</span>
                 </div>
                 <button className="button">
                 <Person className="icon"/>
                 </button>
                 </li>
                 <li className="connection">
                 {/* <img src="" alt="" className="image"/> */}
                 <div className="userInfo">
                     <span className="name">Nawal</span>
                     <span className="role">Role: SWE</span>
                 </div>
                 <button className="button">
                 <Person className="icon"/>
                 </button>
                 </li>
                 <li className="connection">
                 {/* <img src="" alt="" className="image"/> */}
                 <div className="userInfo">
                     <span className="name">Victoria</span>
                     <span className="role">Role: SWE</span>
                 </div>
                 <button className="button">
                 <Person className="icon"/>
                 </button>
                 </li>
             </ul>

         </div>
     )
 } 