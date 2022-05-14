import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        sendPasswordResetEmail,
        ResetSending,
        ResetError
    ] = useSendPasswordResetEmail(auth);

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])


    // const handleResetPassword = data => {
    //     sendPasswordResetEmail(data.email)
    //     console.log(data?.email);
    // }

    let errorMessage;

    if (loading || ResetSending) {
        return <Loading></Loading>
    }

    if (error || ResetError) {
        errorMessage = error.message;
    }

    return (
        <section className='flex justify-center items-center mx-auto h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="card-title text-3xl mb-5 justify-center text-secondary">Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                        value: /[A-Za-z]{6}/,
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
                            <label class="label pt-0 pb-3">
                                <span
                                    // onClick={handleResetPassword}
                                    class="label-text-alt text-sm cursor-pointer">Forget Password ?</span>
                            </label>
                            <label class="label pt-0 pb-2">
                                <span className=' text-red-500 text-sm'>{errorMessage}</span>
                            </label>
                        </div>
                        <input className='btn w-full max-w-xs' value={"Login"} type="submit" />
                        <div className='flex justify-center items-center text-sm mt-2'>
                            <span>New to Doctors Portal?</span>
                            <span className='link-secondary ml-2 cursor-pointer'>
                                <Link to={'/signup'}>Create new account</Link>
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

export default Login;