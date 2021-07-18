import {useState} from 'react'
import Login from './Login'
import LoginSuccess from './LoginSuccess'
import Home from '../home/Home'

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    }
    return (
        <div>
            { !formIsSubmitted ? <Login submitForm={submitForm}/> : <LoginSuccess/> }
        </div>
    )
}

export default Form
