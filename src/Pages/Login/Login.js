import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div class="hero min-h-screen my-20">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                <div class="card-body">
                    <h1 className='text-center text-2xl'>Login</h1>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" name="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" name="password" class="input input-bordered" />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div class="form-control">
                        <button class="btn bg-accent text-white text-md">Login</button>
                    </div>
                    <div className='text-sm text-center'>
                        <p>New to Doctors Portal?
                            <Link to={'/signup'} className='text-secondary ml-2 hover:link'>Create new account</Link>
                        </p>
                    </div>
                    <div class="divider">OR</div>
                    <div class="form-control">
                        <button class="btn bg-white text-accent text-md hover:bg-white text-accent">Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;