import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { signInUser, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error => { console.log(error) })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error =>{
                console.error(error);
            })
    }

    const handleFacebookSignIn = () => {
        signInWithFacebook()
            .then(result => {
                console.log(result.user);
            })
            .catch(error =>{
                console.error(error);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-5xl font-paragraph font-semibold text-center mt-5 mb-3">Login now!!</h3>
            <div>
                <form onSubmit={handleLogIn} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-heading text-2xl font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-heading text-2xl font-bold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover font-heading text-lg font-bold">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className="font-paragraph text-2xl font-bold">Dont have an account? <Link to='/register' className="text-blue-500">Register with us</Link></p>

                    {/* Login with google */}
                    <button onClick={handleGoogleSignIn} className="btn border border-solid border-black font-heading text-xl font bold my-3"><FaGoogle className="text-2xl"></FaGoogle> Login With GOOGLE</button>
                    {/* login with facebook */}
                    <button onClick={handleFacebookSignIn} className="btn border border-solid border-black font-heading text-xl font bold"><FaFacebook className="text-2xl"></FaFacebook> Login With FACEBOOK</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;