import React from 'react'

import {Link} from 'react-router-dom'

function Home(){
    return (
        <div>
            <h1>This is the Home page</h1>
            <Link to="/login" >Login Page</Link>
            <Link to="/companyReviews" >Company Reviews Page</Link>
            <Link to="/personalJobDashboard" >Personal Job Dashboard Page</Link>
            <Link to="/signUp" >Sign Up Page</Link>
        </div>
    )
}

export default Home