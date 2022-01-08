import React from "react";
 import "./companyDashboard.css";

 export default function CompanyDashboard(){
     return(
         <div className="networkWidget">
             <ul className="connectionList">
                 <li className="connection">
                 {/* <img src="image.jp" alt="" className="image"/> */}
                 <div className="userInfo">
                         <img 
                            src="https://press.aboutamazon.com/system/files-encrypted/nasdaq_kms/inline-images/Amazon-logo.jpg"
                            alt="new"
                            />
                     <span className="name">1000+ Reviews</span>
                     <span className="name">100+ Questions</span>
                     <span className="name">Overall Score:</span>
                     <span className="name">🌟🌟🌟🌟🌟</span>

                </div>
                 </li>
             </ul>

         </div>
     )
 } 