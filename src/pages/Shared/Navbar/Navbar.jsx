import { NavLink } from "react-router-dom";

const Navbar = () => {
    const NavLinks = <>
        <NavLink to="/"  activeClassName="active"><li className="text-xl font-heading font-bold hover:bg-slate-100"><a>HOME</a></li></NavLink>

        <NavLink to="/about"  activeClassName="active"><li className="text-xl font-heading font-bold hover:bg-slate-100"><a>ABOUT</a></li></NavLink>

        <NavLink to="/services"  activeClassName="active"><li className="text-xl font-heading font-bold hover:bg-slate-100"><a>SERVICES</a></li></NavLink>

        <NavLink to="/gallery"  activeClassName="active"><li className="text-xl font-heading font-bold hover:bg-slate-100"><a>GALLERY</a></li></NavLink>

        <NavLink to="/contact"  activeClassName="active"><li className="text-xl font-heading font-bold hover:bg-slate-100"><a>CONTACT</a></li></NavLink>

    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <img className="w-2/3 ml-20 md:ml-0 " src="/src/assets/image/Logo/logo.jpg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn border-black font-heading font-bold text-base md:text-xl">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;