import FormHook from "./FormHook";
import validate from "./validate";
import TextInput from "./TextInput";
import Button from "./BtnCtA";
import axios from "axios";

const LoginForm = () => {

    const {handleChange, values, errors} = FormHook(validate, {
        email: '',
        password: ''
    }, loginUser);

    async function loginUser(values) {
        const body = {
            email: values.email,
            password: values.password
        }
        const result = await axios.post("https://donatello-development.herokuapp.com/login", body)
        const data = result.data;
        console.log(data);
    }


    return (
        <div className="form__container">
            <form className="form">
                <div className="form__title">Welcome back!</div>

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

                <Button type="submit" text="Login" size="medium" variant="purple"/>

                <p className="form__message"> Don't have account?
                    <a className="login__link" href="/signup"> Sign up!</a>
                </p>


            </form>
        </div>
    )
}

export default LoginForm;