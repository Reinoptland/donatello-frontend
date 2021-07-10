import {useState} from "react";

const FormHook = () => {
    const [values, setValues] = useState({
        email:'',
        password:'',
        firstname:'',
        lastname:'',
        iban:''
    });
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })


        }
    const handleSubmit = e => {
        e.preventDefault();
    }
    return {handleChange, values, handleSubmit}
}

export default FormHook;