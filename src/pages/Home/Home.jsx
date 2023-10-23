import { NavLink } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Carousel from "./Carousel";

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Home = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            {/* View Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-28 mx-14 ">
                <div data-aos="fade-right" data-aos-duration="1200" className="mt-6 ml-3 mr-3">
                    <h3 className="text-5xl font-heading font-bold">THE EXPERIENCE</h3>
                    <h4 className="text-3xl font-heading font-semibold my-4">ALL INCLUSIVE WEDDING PACKAGES</h4>
                    <p className="text-xl font-paragraph font-semibold">The Farmhouse provides an intimate setting for your wedding ceremony and reception, all in one convenient location.</p>

                    <p className="text-xl font-paragraph font-semibold mt-3">The all inclusive wedding package creates a stress free experience for your perfect wedding day. The packages include a premium open bar, gourmet food prepared onsite, linens & napkins in your choice of color, candle centerpieces, wedding cake, hotel accommodations, wedding coordinator & more</p>

                    <div className="my-5">
                        <NavLink to='/services'><button className="font-heading border border-double border-[#ae9a64] text-[#ae9a64] text-2xl font-semibold px-7 py-3 rounded-lg hover:bg-[#ae9a64] hover:text-black">VIEW OUR SERVICES</button></NavLink>
                    </div>

                </div>
                <div data-aos="fade-left" data-aos-duration="1200">
                    <img className="" src="/src/assets/image/Service/service heading/service-heading.jpg" alt="" />
                </div>
            </div>


            {/* view about */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-28 mx-14">
                <div data-aos="fade-up-right" data-aos-duration="1200">
                    <img className="" src="/src/assets/image/venue.jpg" alt="" />
                </div>
                <div data-aos="fade-up-left" data-aos-duration="1200" className=" ml-3 mr-3 text-end">
                    <h3 className="text-5xl font-heading font-bold">THE VENUE</h3>
                    <h4 className="text-3xl font-heading font-semibold my-4">BEAUTIFULLY RESTORED FARMHOUSE & ESTATE</h4>
                    <p className="text-xl font-paragraph font-semibold">The Farmhouse offers intimate indoor spaces for your event including the bright and open main terrace hall, indoor lounge and bar, dressing suites and more. Outside, a large wrap around  deck and patio overlook the gazebo bar & gardens.</p>

                    <p className="text-xl font-paragraph font-semibold mt-3">The historical estate boasts a picturesque outdoor ceremony site underneath romantic willow trees & four acres of manicured
                        grounds and gardens.</p>

                    <div className="my-5">
                        <NavLink to='/about'><button className="font-heading border border-double border-[#ae9a64] text-[#ae9a64] text-2xl font-semibold px-7 py-3 rounded-lg hover:bg-[#ae9a64] hover:text-black">ABOUT</button></NavLink>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;