import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Carousel from "./Carousel";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <h3 className="text-3xl">This is Home</h3>
            <Footer></Footer>
        </div>
    );
};

export default Home;