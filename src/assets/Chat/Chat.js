import React from 'react'
import styles from './chat.module.css'
import Message from '../../components/Message/Message'

const Chat = () => {
    return (
        <div className={styles.chat} >
            <div className={styles.left}>
                <div className={styles.groups}>
                    <div className={styles.header}>
                        <div className={styles.indicator}></div>
                        <span>Groups</span>
                    </div>
                
                </div>
                <div className={styles.onlines}>
                    <div className={styles.header}>
                        <div className={styles.indicator}></div>
                        <span>Onlines</span>
                    </div>
                </div>
                <div className={styles.offlines}>
                    <div className={styles.header}>
                        <div className={styles.indicator}></div>
                        <span>Offlines</span>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.messages}>
                    <Message type="sent"></Message>
                    <Message type="sent"></Message>
                    <Message type="sent"></Message>
                    <Message type="recieved"></Message>
                    <Message type="recieved"></Message>
                    <Message type="sent"></Message>
                    <Message type="sent"></Message>
                    <Message type="sent"></Message>
                    <Message type="sent"></Message>
                    <Message type="sent"></Message>
                    <Message type="sent"></Message>
                    <Message type="sent"></Message>
                    <Message type="sent"></Message>
                    <Message type="sent"></Message>
                    <Message type="sent"></Message>
                    <Message type="sent"></Message>
                    <Message type="sent"></Message>
                    <Message type="sent"></Message>
                    <Message type="recieved"></Message>
                    <Message type="recieved"></Message>
                    <Message type="recieved"></Message>
                    <Message type="recieved"></Message>
                    <Message type="recieved"></Message>
                    <Message type="recieved"></Message>
                </div>
                <div className={styles.input}>
                    <input type="text"/>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chat
