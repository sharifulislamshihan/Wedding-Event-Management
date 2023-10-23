import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h3 className="text-3xl">Login now!!</h3>
            <div>
                <form className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Don't have an account? <Link to='/register' className="text-blue-500">Register with us</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;