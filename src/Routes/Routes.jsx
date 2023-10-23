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
                element:<About></About>
            },
            {
                path:"/services",
                element:<Services></Services>,
                loader: ()=> fetch( '/services.json' )
            },
            {
                path:"/:id",
                element:<ServiceDetails></ServiceDetails>,
                loader: ()=> fetch('/services.json')
            },
            {
                path:"/gallery",
                element:<Gallery></Gallery>,
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
        ]
    }
])
export default Routes;