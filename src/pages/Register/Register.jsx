

const Register = () => {
    return (
        <div>
            <h3 className="text-3xl">Register now!!</h3>
            <div>
                <form className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">NAME</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">EMAIL</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PASSWORD</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <div className="flex gap-5">
                            <input type="checkbox" name="" id="" />
                            <p>Accept Terms & Conditions</p>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Already have an account? <Link to='/login' className="text-blue-500">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;