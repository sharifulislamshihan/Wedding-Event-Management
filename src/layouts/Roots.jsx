import { Outlet } from "react-router-dom";

const Roots = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;