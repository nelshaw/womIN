//import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import CompanyReviews from "./components/companyReviews";
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";
import PersonalJobDashBoard from "./components/personalJobDashboard";
import Topbar from "./components/topbar/topbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/companyReviews" element={<CompanyReviews />}/>
        <Route path="/personalJobDashBoard" element={<PersonalJobDashBoard />}/>              
      </Routes>
    </div>
  </BrowserRouter>
  );
 };

// const App = () => {
//   let routes = useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "/login", element: <Login /> },
//     { path: "/companyReviews", element: <CompanyReviews /> },
//     { path: "/personalJobDashBoard", element: <PersonalJobDashBoard /> },
//     { path: "/signUp", element: <SignUp /> },
//   ]);
//   return routes;
// };

// const AppWrapper = () => {
//   return (
//     <Router>
//       <App />
//       <Topbar />
//       <div class="container">
//         <Sidebar/>
//         {/* <Home/> */}
        
//       </div>
      
//     </Router>
//   );
// };


export default App;
