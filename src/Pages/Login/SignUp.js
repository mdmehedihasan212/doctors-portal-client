import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div class="hero min-h-screen my-20">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                <div class="card-body">
                    <h1 className='text-center text-2xl'>Sign Up</h1>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" name="name" class="input input-bordered" />
                    </div>
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
                        <button class="btn bg-accent text-white text-md">Sign Up</button>
                    </div>
                    <div className='text-sm text-center'>
                        <p>My Doctors Portal Account?
                            <Link to={'/login'} className='text-secondary ml-2 hover:link'>Please Login</Link>
                        </p>
                    </div>

                    <div class="flex flex-col w-full border-opacity-50">
                        <div class="divider">OR</div>
                    </div>
                    <div class="form-control">
                        <button class="btn bg-white text-accent text-md hover:bg-white text-accent">Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;