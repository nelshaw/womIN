import React from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/login">Login Page</Link>
      <Link to="/companyReviews">Company Reviews Page</Link>
      <Link to="/personalJobDashboard">Personal Job Dashboard Page</Link>
      <Link to="/signUp">Sign Up Page</Link>
      <Link to="/network">Network page</Link>
    </div>
  );
}

export default Home;
