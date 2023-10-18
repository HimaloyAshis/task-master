import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit = (dada) => {
        console.log(dada)

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name</label>
                    <input {...register("name")} />
                </div>
                <div>
                    <label>Email</label>
                    <input {...register("email")} />
                </div>
                <div>
                    <label>Password</label>
                    <input {...register("password")} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input {...register("confirm")} />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
};

export default SignUp;