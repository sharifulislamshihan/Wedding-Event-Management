import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import ServicesCart from "./ServicesCart";


const Services = () => {

    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-5xl font-heading font-bold text-center my-7">Welcome to <span className="font-paragraph">Wedding Planner</span></h3>
            <p className="text-3xl font-pacifico text-center font-bold mb-7 text-slate-600">OUR SERVICES</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-11 my-20">
                {
                    services.map(service => <ServicesCart key={service.id} service={service}></ServicesCart>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;