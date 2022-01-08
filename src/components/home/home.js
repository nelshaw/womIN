import React from 'react'

import {Link} from 'react-router-dom'
import NetworkWidget from '../networkWidget/networkWidget'
import UpcomingInterviewWidget from '../upcomingInterviewWidget/upcomingInterviewWidget'
import './home.css'

function Home(){
    return (
        <div className="home">
            <div className="homeWidget">
                <NetworkWidget/>
                <UpcomingInterviewWidget/>
            </div>
        </div> 
        
    )
}

export default Home

// {/* <div class="row"> */}
                
//         {/* <Link to="/personalJobDashboard" >
//                 <div class="column">
//                     <h2>Your Network</h2>
//                 </div>
//             </Link>
//             <Link to ="/personalJobDashboard">
//                 <div class="column">
//                     <h2>Upcoming Interviews</h2>
//                 </div>
//                 </Link>
//                 <Link to ="/personalJobDashboard">
//                 <div class="column">
//                     <h2>Your Applications</h2>
//                 </div>
//                 </Link>
//                 <Link to ="/companyReviews">
//                 <div class="column">
//                     <h2>Recent Compnay Reviews</h2>
//                 </div>
//                 </Link> */}

                
//                 </div>
            
//                 {/* 
//                             <Link to="/companyReviews" >Company Reviews Page</Link>
//                             <Link to="/personalJobDashboard" >Personal Job Dashboard Page</Link> */}
//                         </div>