import { useState } from 'react';
import './RightComponent.css';
import formValidation from './formValidation';

function RightComponent() {

    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        name1: "",
        name2: "",
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        setValues({
            [event.target.name]: event.target.value,
        });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(formValidation(values));
    }

    return (
        <div className="rightComponent">
            {/* Promo */}
            <div className="promo">
                <p className="promoText">
                    Try it free 7 days
                    <span className="extraText"> then $20/mo. thereafter</span>
                </p>
            </div>

            {/* Form */}
            <div className="form">
                <div className="formInput"><input onChange={handleChange} value={values.name1} name="name1" placeholder="First Name" type="text" />{errors.name1 && <p className="error">{errors.name1}</p>}</div>
                <div className="formInput"><input onChange={handleChange} value={values.name2} name="name2" placeholder="Last Name" type="text" />{errors.name2 && <p className="error">{errors.name2}</p>}</div>
                <div className="formInput"><input onChange={handleChange} value={values.email} name="email" placeholder="Email Address" type="email" />{errors.email && <p className="error">{errors.email}</p>}</div>
                <div className="formInput"><input onChange={handleChange} value={values.password} name="password" placeholder="Password" type="password" />{errors.password && <p className="error">{errors.password}</p>}</div>
                <div class="wrap">
                    <button onClick={handleFormSubmit} class="button">CLAIM YOUR FREE TRIAL</button>
                </div>
                <div className="footer">
                    <p className="footerText">
                        By clicking this button, you are agreeing to our 
                        <span className="tns"> Terms and Services</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default RightComponent
