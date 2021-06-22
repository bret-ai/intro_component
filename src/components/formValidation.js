const formValidation = (values) => {

    let errors = {};

    if (!values.name1) {
        errors.name1 = "First name is required!"
    }

    if (!values.name2) {
        errors.name2 = "Last name is required!"
    }

    if (!values.email) {
        errors.email = "Email is required!"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid!"
    }

    if (!values.password) {
        errors.password = "Password name is required!"
    } else if (values.password.length < 6 ) {
        errors.password = "Password must be six or more characters!"
    }

    return errors;
}

export default formValidation
