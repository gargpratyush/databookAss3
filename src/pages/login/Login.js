import "./login.css";
import { useState, useEffect} from "react";
import validation from "./validation";

const LoginForm = ({submitForm}) => {

    const [values, setValues] = useState({
        email: "",
        password: ""
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
                        <input type="email"
                         placeholder="Email"
                          className="loginInput"
                           name="email"
                            vaLue={values.email}
                             onChange={handleChange}
                              />

                        {errors.email && <p className="error">{errors.email}</p>} 

                        <input type="text"
                         placeholder="Password"
                          className="loginInput"
                           name="password"
                            vaLue={values.password}
                             onChange={handleChange}
                             />

                        {errors.password && <p className="error">{errors.password}</p>}

                        <button className="loginButton loginInput" onClick={handleFormSubmit} >Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegistrationButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default LoginForm;