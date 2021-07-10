//validation info for sign up form

export default function validate(values) {
    let errors = {};

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password needs to be 8 characters or more';
    }
    if(!values.firstname) {
        errors.firstname = "required";
    }

    if(!values.lastname) {
        errors.lastname = "required";
    }

    if (!values.iban){
        errors.iban = 'iBan is required';
    } else if (/^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/.test(values.iban)) {
        errors.iban = 'iBan is invalid, please check again'
    }


    return errors;
}
// /^[A-Z]{2}[0-9A-Z]*$/
