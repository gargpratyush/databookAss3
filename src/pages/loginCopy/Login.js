import "./login.css";
import { useState, useEffect} from "react";
import validation from "./validation";

const LoginForm = ({submitForm}) => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        setErrors(validation(values));
        setDataIsCorrect(true);
    }


    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
        
    }, [errors]);





    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">databook</h3>
                    <span className="loginDesc">
                        Give us all your data on the pretext of stalking your crushes.
                    </span>
                </div>

                <div className="loginRight">
                    <div className="loginBox">
                        <div className="signupPlaceholder">
                        <input type="email"
                         placeholder="Email"
                          className="loginInput"
                           name="email"
                            vaLue={values.email}
                             onChange={handleChange}
                              />

                        {errors.email && <p className="error">{errors.email}</p>} 
                        </div>

                        <div className="signupPlaceholder">
                        <input type="text"
                         placeholder="Password"
                          className="loginInput"
                           name="password"
                            vaLue={values.password}
                             onChange={handleChange}
                             />

                        {errors.password && <p className="error">{errors.password}</p>}
                        </div>

                        <div className="signupPlaceholder">
                        <input type="text"
                         placeholder="Re-enter Password"
                          className="loginInput"
                           name="password"
                            vaLue={values.confirmPassword}
                             onChange={handleChange}
                             />

                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                        </div>

                        <div className="signupPlaceholder">
                        <input type="text"
                         placeholder="Phone Number"
                          className="loginInput"
                           name="password"
                            vaLue={values.phoneNumber}
                             onChange={handleChange}
                             />

                        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                        </div>
                        <button className="loginRegistrationButton" onClick={handleFormSubmit}>Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default LoginForm;