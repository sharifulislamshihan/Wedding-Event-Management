import { NavLink, Navigate } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Carousel from "./Carousel";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            {/* View Services */}
            <section>
                <div className="grid grid-cols-2 gap-16 my-28 ">
                    <div className="mt-12">
                        <h3 className="text-5xl font-heading font-bold">THE EXPERIENCE</h3>
                        <h4 className="text-3xl font-heading font-semibold my-4">ALL INCLUSIVE WEDDING PACKAGES</h4>
                        <p className="text-xl font-paragraph font-semibold">The Farmhouse provides an intimate setting for your wedding ceremony and reception, all in one convenient location.</p>

                        <p className="text-xl font-paragraph font-semibold">The all inclusive wedding package creates a stress free experience for your perfect wedding day. The packages include a premium open bar, gourmet food prepared onsite, linens & napkins in your choice of color, candle centerpieces, wedding cake, hotel accommodations, wedding coordinator & more</p>

                        <div className="my-5">
                            <NavLink to='/services'><button className="font-heading border border-double border-[#ae9a64] text-[#ae9a64] text-2xl font-semibold px-7 py-3 rounded-lg hover:bg-[#ae9a64] hover:text-black">VIEW OUR SERVICES</button></NavLink>
                        </div>

                    </div>
                    <div>
                        <img className="" src="/src/assets/image/Service/service heading/service-heading.jpg" alt="" />
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;