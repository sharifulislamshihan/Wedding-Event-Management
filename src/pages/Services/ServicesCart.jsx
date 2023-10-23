// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const ServicesCart = ({ service }) => {
    const {id ,image, serviceName, price, shortDescription} = service;
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <div data-aos="zoom-in-up" data-aos-duration="1000" className="card card-compact h-full bg-base-100">
                <figure><img className=" h-56 w-full " src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-heading font-bold my-3">{serviceName}</h2>
                    <p className="text-3xl font-heading font-semibold">Price: <span className="text-3xl font-pacifico font-bold">{price}</span></p>
                    <p className="text-xl font-pacifico text-slate-500">{shortDescription} <Link to={`/${id}`}><span className='text-blue-700 underline'>Show details</span></Link></p>
                    
                    
                        <button className="btn btn-primary bg-white text-[#ae9a64] border-[#ae9a64] border-solid my-5 hover:bg-[#ae9a64] hover:text-black">Book Now.</button>
                    
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;