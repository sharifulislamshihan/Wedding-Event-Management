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


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const[showPassword, setShowPassword] = useState(false);

    const completeRegister = () => {
        Swal.fire('Thank you for being with us. Registration Completed!')
    }

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // password validation
        if (password.length <6){
            toast.error("Password should be atleast 6 characters");
            return;
        }
        // !/^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})$/.test(password)
        if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(password)){
            toast.error("Password must contain atleast one capital letter and one special character");
            return;
        }
        

        // create user in firebase
        createUser(email, password)
            .then(userCredential => {
                console.log(userCredential.user);
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
                            <span>Show</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <div className="flex gap-5 mt-2">
                            <input type="checkbox" name="" id="" />
                            <p className="text-xl font-paragraph
                            font-bold">Accept Terms & Conditions</p>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary font-heading text-2xl font-bold">REGISTER</button>
                    </div>
                    <p className="text-xl font-paragraph font-semibold">Already have an account? <Link to='/login' className="text-blue-500 underline">Login</Link></p>
                </form>
                <ToastContainer />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;