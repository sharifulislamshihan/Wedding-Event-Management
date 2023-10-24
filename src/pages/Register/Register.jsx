import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
// sweet alert
import Swal from "sweetalert2";

// react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// react icon
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { sendEmailVerification } from "firebase/auth";


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const completeRegister = () => {
        Swal.fire('Thank you for being with us. Registration Completed!')
    }

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(name, email, password, terms);

        // password validation
        if (password.length < 6) {
            toast.error("Password should be atleast 6 characters");
            return;
        }
        // !/^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})$/.test(password)
        else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(password)) {
            toast.error("Password must contain atleast one capital letter and one special character");
            return;
        }
        else if (!terms) {
            toast.error("Please accept terms and conditions");
            return;
        }


        // create user in firebase
        createUser(email, password)
            .then(userCredential => {
                console.log(userCredential.user);
                // send Verification
                sendEmailVerification(userCredential.user)
                    .then(() => {
                        
                    })
                e.target.reset();
                completeRegister();
                navigate('/');
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

                if (errorCode === 'auth/email-already-in-use') {
                    Swal.fire('Error', 'Email is already in use.', 'error');
                } else if (errorCode === 'auth/invalid-email') {
                    Swal.fire('Error', 'Invalid email address.', 'error');
                } else if (errorCode === 'auth/weak-password') {
                    Swal.fire('Error', 'Password is too weak. It should be at least 6 characters.', 'error');
                } else {
                    Swal.fire('Error', 'An error occurred during registration.', 'error');
                }
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-5xl font-paragraph font-semibold text-center mt-5 mb-3">Register now!!</h3>
            <div>
                <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-heading text-2xl font-bold">NAME</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-heading text-2xl font-bold">EMAIL</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-heading text-2xl font-bold">PASSWORD</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className=" w-full input input-bordered" required />

                            <span className=" absolute translate-y-1/2 right-10 md: right-4 lg:right-5  " onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash className="text-2xl tooltip" data-tip="Hide"></FaEyeSlash> : <FaEye className="text-2xl tooltip" data-tip="Reveal"></FaEye>
                                }
                            </span>

                        </div>
                        <div className="flex gap-5 mt-2">
                            <input type="checkbox" name="terms" id="" />
                            <p className="text-xl font-paragraph
                            font-bold">Accept Terms & Conditions</p>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary font-heading text-2xl font-bold">REGISTER</button>
                    </div>
                    <p className="text-2xl font-paragraph font-semibold mt-2">Already have an account? <Link to='/login' className="text-blue-500 underline">Login</Link></p>
                </form>
                <ToastContainer />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;