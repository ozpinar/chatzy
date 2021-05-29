import React from 'react'
import styles from '../Login/login.module.css'
import LoginImage from '../../images/login-image.svg'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className={styles.login}>
           <div className={styles.left}>
                <div className={styles.form}>
                    <h1>Join chat app now</h1>
                    <p>You may join now if you are already our employee</p>
                    <div className={styles.inputs}>
                        <label for="username">Username</label>
                        <input name="username" type="text"/> 
                        <label for="password">Password</label> 
                        <input name="password" type="password"/> 
                        <label for="code">Code</label> 
                        <input name="code" type="text"/> 
                        <button>Sign up</button>
                    </div>
                </div>
                <p className={styles.bottom}>Already have an account? <Link to="/login">Log In</Link></p>
           </div>
           <div className={styles.right}>
                <img src={LoginImage} alt="" />
           </div>
        </div>
    )
}

export default Register
