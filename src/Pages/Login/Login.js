import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
    return (
        <div className="hero min-h-screen my-20">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                <div className="card-body">
                    <h1 className='text-center text-2xl text-primary'>Login</h1>
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn bg-accent text-white text-md">Login</button>
                    </div>
                    <div className='text-sm text-center'>
                        <p>New to Doctors Portal?
                            <Link to={'/signup'} className='text-secondary ml-2 hover:link'>Create new account</Link>
                        </p>
                    </div>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;