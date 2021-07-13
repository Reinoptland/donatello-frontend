import React from 'react';
import "./Signup.scss"
import FormHook from "./FormHook";
import validate from './validate'
import Button from "./BtnCtA";
import axios from 'axios'
import TextInput from "./TextInput";

const Signup = () => {
    const {handleChange, values, handleSubmit, errors} = FormHook(validate, {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        iBan: ''
    }, getNewUser)


    async function getNewUser(values) {

        const body = {
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            iBan: values.iBan
        }
        const result = await axios.post("https://donatello-development.herokuapp.com/users", body)
        const data = result.data;
        console.log(data);
    }

    return (
        <div className='form__container'>
            <div className='form__container-right'>
                <form className="form"
                      onSubmit={handleSubmit}
                >
                    <div className="form__title">Let's change the world!</div>

                    <TextInput
                        name="email"
                        values={values}
                        handleChange={handleChange}
                        type="email"
                        placeholder="Email"
                        errors={errors}
                    />

                    <TextInput
                        name="password"
                        values={values}
                        handleChange={handleChange}
                        type="password"
                        placeholder="Password"
                        errors={errors}
                    />

                    <TextInput
                        name="firstName"
                        values={values}
                        handleChange={handleChange}
                        type="text"
                        placeholder="Firstname"
                        errors={errors}
                    />

                    <TextInput
                        name="lastName"
                        values={values}
                        handleChange={handleChange}
                        type="text"
                        placeholder="Lastname"
                        errors={errors}
                    />

                    <TextInput
                        name="iBan"
                        values={values}
                        handleChange={handleChange}
                        type="text"
                        placeholder="iBan"
                        errors={errors}
                    />

                    <Button type="submit" text="Sign up" size="medium" variant="purple"/>

                    <p className="form__message"> Already have an account?<a className="login__link" href="#">here</a>
                    </p>


                </form>
            </div>
        </div>
    );
}

export default Signup;

