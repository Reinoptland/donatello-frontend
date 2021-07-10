import React, {useState} from 'react';
import "./Signup.scss"
import FormHook from "./FormHook";
import validate from './validate'



const Signup = () => {
    const {handleChange, values, handleSubmit, errors} = FormHook(validate);


    return (
        <div className='form__container'>
        <div className='form__container-right'>
            <form className="form"
                    onSubmit={handleSubmit}
            >
                <h4 className="form__title">Let's change the world!</h4>

                <div className="form__input">
                    <label
                        className="form__input--label"
                        htmlFor="email"
                    >
                        <input
                            value={values.email}
                            onChange={handleChange}
                            type="email"
                            name="email"
                            className="form__input"
                            placeholder="Email"
                        />
                    </label>
                    {errors.email && <p>{errors.email}</p>}
                </div>


                    <div className="form__input">
                        <label
                            className="form__input--label"
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

                    <div className="form__input">
                        <label
                            className="form__input--label"
                            htmlFor="firstname"
                        >
                            <input
                                value={values.firstname}
                                onChange={handleChange}
                                type="text"
                                name="firstname"
                                className="form__input"
                                placeholder="First name"
                            />
                        </label>
                        {errors.firstname && <p>{errors.firstname}</p>}
                    </div>

                    <div className="form__input">
                        <label
                            className="form__input--label"
                            htmlFor="lastname"
                        >
                            <input
                                value={values.lastname}
                                onChange={handleChange}
                                type="text"
                                name="lastname"
                                className="form__input"
                                placeholder="Last name"
                            />
                        </label>
                        {errors.lastname && <p>{errors.lastname}</p>}
                    </div>

                    <div className="form__input">
                        <label
                            className="form__input--label"
                            htmlFor="iban"
                        >
                            <input
                                value={values.iban}
                                onChange={handleChange}
                                type="text"
                                name="iban"
                                className="form__input"
                                placeholder="iBan"
                            />
                        </label>
                        {errors.iban && <p>{errors.iban}</p>}
                    </div>


                <button type="submit" className="form__input--btn">
                    Sign up
                </button>
                <div className="form__input--login">
                   Already have an account? <a href="#">here</a>
               </div>

            </form>
        </div>
        </div>
    );
}

export default Signup;

