import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin';

const SignUp = () => {

    const handleSubmit = event => {

    }

    return (
        <div className="hero min-h-screen my-20">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-center text-2xl text-primary'>Sign Up</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name="password" className="input input-bordered" />
                    </div>
                    <div onClick={handleSubmit} className="form-control mt-5">
                        <button className="btn bg-accent text-white text-md">Sign Up</button>
                    </div>
                    <div className='text-sm text-center'>
                        <p>My Doctors Portal Account?
                            <Link to={'/login'} className='text-secondary ml-2 hover:link'>Please Login</Link>
                        </p>
                    </div>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;