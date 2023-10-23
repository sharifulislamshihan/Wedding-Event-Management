import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {

    const { creatUser } = useContext(AuthContext);
    

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // create user in firebase
        creatUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .error(error => {
            console.error(error)
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
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <div className="flex gap-5">
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
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;