import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <section className='flex justify-center items-center mx-auto h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 class="card-title text-2xl text-center">Login</h1>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text-alt text-red-500">
                                    {errors.email?.type === 'required' && "Email is required"}
                                </span>
                            </label>
                        </div>
                        <input className='btn w-full max-w-xs' value={"Login"} type="submit" />
                    </form>
                    <div class="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </section>
    );
};

export default Login;