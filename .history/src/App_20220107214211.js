import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Contact from "./contact"

const App = () => {

    let routes = useRoutes([
        { path: "/", element: < Home / > },
        { path: "/companyReviews", element: < About / > },
        { path: "logi", element: < Contact / > }

    ])
    return routes;
}

const AppWrapper = () => {
    return ( <
        Router >
        <
        App / >
        <
        /Router>
    )
}

export default AppWrapper;