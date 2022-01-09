import React from "react";
 import "./companyDashboard.css";

 export default function CompanyDashboard(){
     return(
         <div className="companyDashboardWidget">
             <ul className="reviewsList">
                 <li className="reviews">
                 <div className="reviewDetails">
                         <img 
                            src="https://press.aboutamazon.com/system/files-encrypted/nasdaq_kms/inline-images/Amazon-logo.jpg"
                            alt="new"
                            />
                     <span className="reviewData">1000+ Reviews</span>
                     <span className="reviewData">100+ Questions</span>
                     <span className="reviewData">Overall Score:</span>
                     <span className="reviewData">🌟🌟🌟🌟🌟</span>
                </div>
                 </li>
             </ul>
         </div>
     )
 } 