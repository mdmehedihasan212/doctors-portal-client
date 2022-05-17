import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: services, isLoadin, refach } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()))

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
                    <select {...register("specialist", {
                        required: {
                            value: true,
                            message: 'Specialist Is Required'
                        }
                    })}
                        class="select select-bordered w-full max-w-xs">
                        {
                            services.map(service => <option selected value={service.name}>{service.name}</option>)
                        }
                    </select>
                    <label className="label">
                        {errors.specialist?.type === 'required' &&
                            <span className="label-text-alt text-red-500">{errors.specialist.message}</span>
                        }

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        {...register("photo", {
                            required: {
                                value: true,
                                message: 'Photo Is Required'
                            }
                        })}
                        type="file"
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.photo?.type === 'required' &&
                            <span className="label-text-alt text-red-500">{errors.photo.message}</span>
                        }
                    </label>
                </div>
                <input className='btn w-full max-w-xs' value={"Add Doctor"} type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;