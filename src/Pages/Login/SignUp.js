import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import SocialLogin from '../Shared/SocialLogin';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    const [token] = useToken(user)

    let errorMessage;
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error || updatingError) {
        errorMessage = error?.message;
    }

    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({
            displayName: data.name
        })
    };


    return (
        <section className='flex justify-center items-center mx-auto h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="card-title text-3xl mb-5 justify-center text-secondary">Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name Is Required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{4}/,
                                        message: 'Provide Valid Name'
                                    }
                                })}
                                type="text"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.name.message}</span>
                                }
                                {errors.name?.type === 'pattern' &&
                                    <span className="label-text-alt text-red-500">{errors.name.message}</span>
                                }
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email Is Required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{4}/,
                                        message: 'Provide Valid Email'
                                    }
                                })}
                                type="email"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                                {errors.email?.type === 'pattern' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password Is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password Minimum 6 Character'
                                    }
                                })}
                                type="password"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                                {errors.password?.type === 'minLength' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                            </label>
                            <label className="label pt-0 pb-2">
                                <span className=' text-red-500 text-sm'>{errorMessage}</span>
                            </label>
                        </div>
                        <input className='btn w-full max-w-xs' value={"Sign Up"} type="submit" />
                        <div className='flex justify-center items-center text-sm mt-2'>
                            <span>I have an account?</span>
                            <span className='link-secondary ml-2 cursor-pointer'>
                                <Link to={'/login'}>Please Login</Link>
                            </span>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </section>
    );
};

export default SignUp;