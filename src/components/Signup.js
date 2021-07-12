import React from 'react';
import "./Signup.scss"
import FormHook from "./FormHook";
import validate from './validate'
import Button from "./BtnCtA";


const Signup = () => {
    const {handleChange, values, handleSubmit, errors} = FormHook(validate);


    return (
        <div className='form__container'>
            <div className='form__container-right'>
                <form className="form"
                      onSubmit={handleSubmit}
                >
                    <div className="form__title">Let's change the world!</div>

                    <div className="form__input-group">
                        <label
                            className="form__label"
                            htmlFor="email"
                        >
                            <input
                                value={values.email}
                                onChange={handleChange}
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form__input"
                            />
                        </label>
                        {errors.email && <p>{errors.email}</p>}
                    </div>


                    <div className="form__input-group">
                        <label
                            className="form__label"
                            htmlFor="password"
                        >
                            <input
                                value={values.password}
                                onChange={handleChange}
                                type="password"
                                name="password"
                                className="form__input"
                                placeholder="Password"
                            />
                        </label>
                        {errors.password && <p>{errors.password}</p>}
                    </div>

                    <div className="form__input-group">
                        <label
                            className="form__label"
                            htmlFor="firstName"
                        >
                            <input
                                value={values.firstName}
                                onChange={handleChange}
                                type="text"
                                name="firstName"
                                className="form__input"
                                placeholder="First name"
                            />
                        </label>
                        {errors.firstName && <p>{errors.firstName}</p>}
                    </div>

                    <div className="form__input-group">
                        <label
                            className="form__label"
                            htmlFor="lastName"
                        >
                            <input
                                value={values.lastName}
                                onChange={handleChange}
                                type="text"
                                name="lastName"
                                className="form__input"
                                placeholder="Last name"
                            />
                        </label>
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>

                    <div className="form__input-group">
                        <label
                            className="form__label"
                            htmlFor="iBan"
                        >
                            <input
                                value={values.iban}
                                onChange={handleChange}
                                type="text"
                                name="iBan"
                                className="form__input"
                                placeholder="iBan"
                            />
                        </label>
                        {errors.iBan && <p>{errors.iBan}</p>}
                    </div>


                    <Button type="submit" text="Sign up" size="medium" variant="purple"/>

                    <p className="form__message"> Already have an account?<a className="login__link" href="#">here</a>
                    </p>


                </form>
            </div>
        </div>
    );
}

export default Signup;

