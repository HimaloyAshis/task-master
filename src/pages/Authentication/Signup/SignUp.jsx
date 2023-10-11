import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {

    const { register, handleSubmit} = useForm()

    const onSubmit =(dada)=>{
        console.log(dada)

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input {...register("firstName")} />
                <label>Gender Selection</label>
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
};

export default SignUp;