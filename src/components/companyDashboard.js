import React from "react";
 import "./companyDashboard.css";

 export default function CompanyDashboard(){
     return(
         <div className="companyDashboardWidget">
              <h3 className="reviewTitle">Featured Companies</h3>
             <ul className="reviewsList">
                 <li className="reviews">
                 <div className="reviewDetails">
                         <img 
                            className="amazonLogo"
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
             <ul className="reviewsList">
                 <li className="reviews">
                 <div className="reviewDetails">
                         <img 
                            className="bellLogo"
                            src="data:image/png;base64,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"
                            alt="new"
                            />
                     <span className="reviewData">100+ Reviews</span>
                     <span className="reviewData">10+ Questions</span>
                     <span className="reviewData">Overall Score:</span>
                     <span className="reviewData">🌟🌟🌟</span>
                </div>
                 </li>
             </ul>
             <ul className="reviewsList">
                 <li className="reviews">
                 <div className="reviewDetails">
                         <img className="facebookLogo" 
                            src="data:image/png;base64,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"
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