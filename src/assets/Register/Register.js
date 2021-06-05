import React, { useState, useContext } from 'react'
import styles from '../Login/login.module.css'
import LoginImage from '../../images/login-image.svg'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Logo from '../../images/logo.svg'

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [code, setCode] = useState("")
    const [message, setMessage] = useState("")
    const [errors, setErrors] = useState([])
    const history = useHistory();

    const setError = (e) => {
        setErrors(e)
    }

    const signUp = async () => {
        try{
            const res = await axios.post("https://chatzy01app.herokuapp.com/api/users/signup", {
                username,
                email,
                password,
                code
            })
            if (res.data.status === 201) {
                setError([])
                setMessage("You have registered successfully!")
                setTimeout(() => {
                    history.push('/')
                }, 500);
            }
        }catch (e) {
            console.log(e.response)
            if (e.response.data.errors) setErrors(e.response.data.errors)
            else if (e.response.data.message) setErrors(e.response.data.message)
        }
     }

    return (
        <div className={styles.login}>
           <div className={styles.left}>
                <div className={styles.form}>
                <img className={styles.logo} width="72px" src={Logo} alt="" />
                    <h1>Join <strong style={{color:"#348C74"}} >Chatzy</strong> now</h1>
                    <p>You may join now if you are already our employee</p>
                    <div className={styles.inputs}>
                        <label for="username">Username</label>
                        <input 
                            value={username} 
                            name="username" 
                            type="text"
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                        <label for="email">E-mail addres</label>
                        <input 
                            value={email} 
                            name="email" 
                            type="email"
                            onChange={(e)=>setEmail(e.target.value)}
                        /> 
                        <label for="password">Password</label> 
                        <input 
                            value={password} 
                            name="password" 
                            type="password"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <label for="code">Code</label> 
                        <input 
                            value={code} 
                            name="code" 
                            type="text"
                            onChange={(e)=>setCode(e.target.value)}
                        /> 
                        <button onClick={signUp} >Sign up</button>
                        <p className={message ? styles.message : styles.hide}>{message} <br /> Redirecting to Log In </p>
                        <div className={errors.length ? styles.error : styles.hide}>
                            {typeof errors != 'string' ? errors?.map(e => (
                            <p>{e.msg}</p>
                                ))
                            :
                            <p>{errors}</p>
                            }
                        </div>
                    </div>
                </div>
                <p className={styles.bottom}>Already have an account? <Link to="/">Log In</Link></p>
           </div>
           <div className={styles.right}>
                <img src={LoginImage} alt="" />
           </div>
        </div>
    )
}

export default Register
