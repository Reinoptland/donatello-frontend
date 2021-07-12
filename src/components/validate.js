//validation info for sign up form

export default function validate(values) {
    console.log(values)
    let errors = {};


    if (!values.email) {
        errors.email = 'email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'email address is invalid';
    }
    if (!values.password) {
        errors.password = 'password is required';
    } else if (values.password.length < 8) {
        errors.password = 'password needs to be 8 characters or more';
    }
    if(!values.firstName) {
        errors.firstName = "required";
    }

    if(!values.lastName) {
        errors.lastName = "required";
    }

    if (!values.iBan){
        errors.iBan = 'iBan is required';
    } else if (!/^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/.test(values.iBan)) {
        errors.iBan = 'iBan is invalid, please check again'
    }

    return errors;
}

