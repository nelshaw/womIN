import {BrowserRouter as Router, Routes, Route, useRoutes} from "react-router-dom"
import CompanyReviews from "./components/companyReviews"
import Home from "./home"
import Login from "./components/Login"
import PersonalJobDashBoard from "./components/personalJobDashboard"
import SignUp from "./components/signUp"

const App=()=>{

  let routes=useRoutes([
    {path:"/", element:<Home/>},
    {path:"/login", element:<Login/>},
    {path:"/companyReviews", element: <CompanyReviews/>},
    {path:"/personalJobDashBoard", element:<PersonalJobDashBoard/>},
    {path:"/signUp", element:<SignUp/>}

  ])
  return routes;
}

const AppWrapper = () =>{
  return(
    <Router>
      <App/>
    </Router>
  )
}

export default AppWrapper;