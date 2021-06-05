import React, {useState, useContext} from 'react'
import styles from './login.module.css'
import LoginImage from '../../images/login-image.svg'
import Logo from '../../images/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const history = useHistory()
    const [user, setUser] = useContext(AuthContext)

    const logIn = async () => {
        if( !email && !password ) return
        try {
            const res = await axios.post("https://chatzy01app.herokuapp.com/api/users/login", {
            email,
            password
        })
        if (res.status === 200) {
            setUser(res.data.data)
            setError("")
            localStorage.setItem('token', res.data.token)
            setMessage("You have logged in successfully.")
            setTimeout(() => {
                history.push('/chat')
            }, 500);
        }
        }
        catch (e){
            setError(e.response.data.message)
        }
    }

    return (
        <div className={styles.login}>
           <div className={styles.left}>
                <div className={styles.form}>
                <img className={styles.logo} width="72px" src={Logo} alt="" />
                    <h1>Login <strong style={{color:"#348C74"}} >Chatzy</strong></h1>
                    <p>Login to start chat with your coworkers</p>
                    <div className={styles.inputs}>
                        <label for="email">E-mail address</label>
                        <input
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                            name="email" 
                            type="email"
                        /> 
                        <label for="password">Password</label> 
                        <input
                            onChange={(e)=>setPassword(e.target.value)}
                            email={password}
                            name="password"
                            type="password"
                        /> 
                        <button onClick={logIn} >Log in</button>
                        <p className={error ? styles.error : styles.hide}>{error}</p>
                        <p className={message ? styles.message : styles.hide}>{message}</p>
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
