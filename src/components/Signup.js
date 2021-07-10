import React, {useState} from 'react';
import "./Signup.scss"
import FormHook from "../FormHook";


const Signup = () => {
    const {handleChange, values, handleSubmit} = FormHook();

    return (
        <div className='form__content-right'>
            <form className="form"
                    onSubmit={handleSubmit}
            >
                <h1>Let's change the world!</h1>
                <div className="form__inputs">
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
                    <div className="form__inputs">
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
                    </div>
                    <div className="form__inputs">
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
                    </div>

                    <div className="form__inputs">
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
                    </div>

                    <div className="form__inputs">
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
                    </div>
                </div>

                <button type="submit" className="form__input--btn">
                    Sign up
                </button>
                <span className="form__input--login">
                   Already have an account? <a href="#">here</a>
               </span>

            </form>
        </div>
    );
}

export default Signup;

