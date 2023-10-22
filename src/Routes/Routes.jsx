import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";



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
            },
            {
                path:"/gallery",
                element:<Gallery></Gallery>,
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            }
        ]
    }
])
export default Routes;