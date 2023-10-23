import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-28">
                <div data-aos="zoom-in-down" data-aos-duration="1500" className=" ml-3 mr-3 mt-28 ">
                    <h3 className="text-5xl font-heading font-bold">HISTORIC
                        MULBERRY ROOM</h3>
                    <h4 className="text-xl font-heading font-semibold my-4">The historic Mulberry Room is situated in the original section of the Farmhouse</h4>
                    <p className="text-xl font-paragraph font-semibold">The Mulberry Room features an antique brick fireplace, gleaming hardwood floors and space for additional guest tables (if needed). </p>

                    <p className="text-xl font-paragraph font-semibold mt-3">The space can also be utilized for indoor portraits or other uses. </p>

                </div>

                <div data-aos="zoom-in-left" data-aos-duration="1500">
                    <img className="h-2/3 mx-auto" src="https://i.ibb.co/ckfgS7y/historic.jpg
" alt="" />
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-20">
                <div data-aos="zoom-out-right" data-aos-duration="1500" className="col-span-2">
                    <img className="" src="https://i.ibb.co/3p39Rrd/indoor.jpg" alt="" />
                </div>

                <div data-aos="zoom-out-left" data-aos-duration="1500" className=" ml-3 mr-3 mt-20 text-center ">
                    <h3 className="text-5xl font-heading font-bold">INDOOR BAR & LOUNGE</h3>

                    <p className="text-xl font-paragraph font-semibold">The indoor bar features dark wood accents, gleaming crystal glassware displays and a large bar top for guests to spread out across. </p>

                    <p className="text-xl font-paragraph font-semibold mt-3">Adjacent to the indoor bar, the guest lounge provides additional room for guests to mingle and adds to the intimate feel of the Farmhouse. </p>

                </div>

            </div>

            <div data-aos="zoom-in" data-aos-duration="1500" className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-20">
                <div className="my-auto mx-7 text-center ">
                    <h3 className="text-4xl font-heading font-bold">PATIO & GAZEBO BA</h3>
                    <p className="text-xl font-paragraph font-medium mt-6">
                        Directly outside the main ballroom, french doors open up to a wrap around  deck and patio that overlooks our gardens and two gazebos.</p>
                    <p className="text-xl font-paragraph font-medium mt-4">The outdoor tables and chairs provide the perfect spot for cocktail hour or after dinner conversation. </p>
                    <p className="text-xl font-paragraph font-medium mt-4">Located on the lower level of the patio, the gazebo bar is accented by cafe lights and features a full bar setup</p>
                </div>

                <div>
                    <img src="https://i.ibb.co/n8rZ6qG/about-4.jpg" alt="" />
                </div>

                <div>
                    <img src="https://i.ibb.co/2vN46vJ/about-5.jpg" alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;