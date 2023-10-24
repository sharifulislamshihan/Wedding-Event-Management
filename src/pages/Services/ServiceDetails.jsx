import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";



const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const { id } = useParams();


    const details = serviceDetails.find(details => details.id == id)
    console.log(details.id);
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h3 className="text-5xl font-paragraph font-semibold text-center mt-7">{details.serviceName}</h3>

                <img className=" my-10 " src={details.image} alt="" />

                <p className="text-2xl font-pacifico text-slate-500">{details.detailsDescription}</p>

                <h3 className="text-4xl font-heading font-semibold my-12">Price: <span className="text-4xl font-pacifico font-bold">{details.price}</span></h3>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;