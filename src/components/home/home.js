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