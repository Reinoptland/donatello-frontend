import {useState} from "react";


//custom hook to get values from input field sign up

const FormHook = (validate) => {
    const [values, setValues] = useState({
        email:'',
        password:'',
        firstName:'',
        lastName:'',
        iBan:''
    });
    const [errors, setErrors] = useState({});


    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })}

    const handleSubmit = e => {
        e.preventDefault();
        const formErrors = validate(values)
        console.log("errors?", formErrors)
        console.log("leeg?", Object.keys(formErrors).length === 0)

    if(
        Object.keys(formErrors).length === 0
    ){
        console.log("send data here")
        setErrors({})
    } else {
        setErrors(formErrors)
    }


    }
    return {handleChange, values, handleSubmit, errors}
}

export default FormHook;