import React from 'react'
import styles from './login.module.css'
import LoginImage from '../../images/login-image.svg'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div className={styles.login}>
           <div className={styles.left}>
                <div className={styles.form}>
                    <h1>Login Chat</h1>
                    <p>Login to start chat with your coworkers</p>
                    <div className={styles.inputs}>
                        <label for="username">Username</label>
                        <input name="username" type="text"/> 
                        <label for="password">Password</label> 
                        <input name="password" type="password"/> 
                        <button>Log in</button>
                    </div>
                </div>
                <p className={styles.bottom}>Don't have an account? <Link to="/register">Sign Up</Link></p>
           </div>
           <div className={styles.right}>
                <img src={LoginImage} alt="" />
           </div>
        </div>
    )
}

export default Login
