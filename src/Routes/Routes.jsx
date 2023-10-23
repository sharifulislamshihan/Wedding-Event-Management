import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile/Profile";



const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<PrivateRoute><About></About></PrivateRoute>
            },
            {
                path:"/services",
                element:<Services></Services>,
                loader: ()=> fetch( '/services.json' )
            },
            {
                path:"/:id",
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ()=> fetch('/services.json')
            },
            {
                path:"/gallery",
                element:<PrivateRoute><Gallery></Gallery></PrivateRoute>,
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/login",
                element:<Login></Login>,
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path: "/profile",
                element:<Profile></Profile>
            }
        ]
    }
])
export default Routes;