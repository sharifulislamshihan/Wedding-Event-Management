import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() => console.log("Logged out successfully"))
        .catch(error => console.error(error)) 
    }

    const NavLinks = <>
        <NavLink to="/" activeClassName="active"><li className="text-xl font-heading font-bold hover:bg-slate-100"><a>HOME</a></li></NavLink>

        <NavLink to="/about" activeClassName="active"><li className="text-xl font-heading font-bold hover:bg-slate-100"><a>ABOUT</a></li></NavLink>

        <NavLink to="/services" activeClassName="active"><li className="text-xl font-heading font-bold hover:bg-slate-100"><a>SERVICES</a></li></NavLink>

        <NavLink to="/gallery" activeClassName="active"><li className="text-xl font-heading font-bold hover:bg-slate-100"><a>GALLERY</a></li></NavLink>

        <NavLink to="/contact" activeClassName="active"><li className="text-xl font-heading font-bold hover:bg-slate-100"><a>CONTACT</a></li></NavLink>

    </>

    return (
        <div className="">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown relative overflow-visible">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 absolute z-10">
                            {NavLinks}
                        </ul>
                    </div>
                    <img className="w-2/3 mx-auto md:ml-0 " src="https://i.ibb.co/nkfXH6s/logo.jpg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="flex">
                            <img className="w-16 h-16 mt-5 rounded-lg" src={user?.photoURL} alt="no img" />
                            <span className="mr-5 text-2xl font-pacifico hidden md:block">Hey!! {user?.displayName}</span>
                            <Link to='/login'><a onClick={handleLogOut} className="btn border-black font-heading font-bold text-base md:text-xl">Logout</a></Link>
                            </div>
                            : 
                            <Link to='/login'><a className="btn border-black font-heading font-bold text-base md:text-xl">LogIn</a></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;