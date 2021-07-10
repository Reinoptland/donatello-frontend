import {useState} from "react";


//custom hook to get values from input field sign up

const FormHook = (validate) => {
    const [values, setValues] = useState({
        email:'',
        password:'',
        firstname:'',
        lastname:'',
        iban:''
    });
    const [errors, setErrors] = useState({});


    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })}

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values))


    }
    return {handleChange, values, handleSubmit, errors}
}

export default FormHook;