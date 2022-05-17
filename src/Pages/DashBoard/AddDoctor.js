import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log(data)
    };

    return (
        <div>
            <h2 className="text-3xl">Add Doctor</h2>
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
                        <span className="label-text">Specialist</span>
                    </label>
                    <input
                        {...register("specialist", {
                            required: {
                                value: true,
                                message: 'Specialist Is Required'
                            }
                        })}
                        type="text"
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.specialist?.type === 'required' &&
                            <span className="label-text-alt text-red-500">{errors.specialist.message}</span>
                        }

                    </label>
                </div>
                <input className='btn w-full max-w-xs' value={"Add Doctor"} type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;