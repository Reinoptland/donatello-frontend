import {useState} from "react";


//custom hook to get values from input field sign up

const FormHook = (validate, initialValues, submitFunction) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});


    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formErrors = validate(values)


        if (
            Object.keys(formErrors).length === 0
        ) {
            submitFunction(values);
            setErrors({})
        } else {
            setErrors(formErrors)
        }
    }


    return {handleChange, values, handleSubmit, errors}
}

export default FormHook;