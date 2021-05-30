import React from 'react'
import styles from './message.module.css'

const Message = ( {children = "Hello", type = "recieved", time = "13:52"} ) => {
    const customContainer = {
        justifyContent: type === "recieved" ? "flex-start" : "flex-end",
    }

    const customStyles = {
        fontFamily: "Poppins, sans-serif",
        fontWeight: 300,
        color: type === "recieved" ? "white" : "#348C74",
        background: type === "recieved" ? "#348C74" : "rgba(52, 140, 116, 0.2)",
        maxWidth: "25ch",
        padding: "1rem 2rem",
        paddingRight: "4rem",
        wordWrap: 'break-word',
        borderRadius: type === "recieved" ? "5px 40px 40px 40px" : "40px 40px 5px 40px"
    }

    return (
        <div style = {customContainer} className={styles.container} >
            <div style = {customStyles} className={styles.message}>
            <p>
              {children}
            </p>
            <span style={{color: type === "recieved" ? "white" : "#348C74"}} className={styles.time} >{time}</span>
            </div>
        </div>
    )
}

export default Message
