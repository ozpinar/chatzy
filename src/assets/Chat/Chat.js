import React, { useState, useEffect, useRef } from 'react'
import styles from './chat.module.css'
import Message from '../../components/Message/Message'
import Card from '../../components/Card/Card'
import GroupCard from '../../components/GroupCard/GroupCard'
import ChatHeader from '../../components/ChatHeader/ChatHeader'
import {data} from '../../dummy/users'
import classnames from 'classnames'

const Chat = () => {
    const [messages, setMessages] = useState()
    const [input, setInput] = useState("")
    const [users, setUsers] = useState()
    const [currentChat, setCurrentChat] = useState()
    const [showChat, setShowChat] = useState(false)
    const scrollRef = useRef()
    const userID = 1
    let id = 1
    
    useEffect(()=>{
        setMessages([]);
        setUsers(data.users);
    },[])

    useEffect(()=>{
        scrollRef.current?.scrollIntoView( {behavior: "smooth"} )
    },[messages])

    const time = new Date();
    function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
    }   
    const hm = `${addZero(time.getHours())}:${addZero(time.getMinutes())}`

    const sendMessage = () => {
        if(!input) return
        id++
        setMessages(prevMessages => [...prevMessages, {
            id,
            text: input,
            senderID: 1,
            recieverID: 2,
            time: hm
        }])

        setInput("")
    }

    const sendMessageKeyPress = (e) => {
        if (e.key === 'Enter' && input) {
            id++
            setMessages(prevMessages => [...prevMessages, {
                id,
                text: input,
                senderID: 1,
                recieverID: 2,
                time: hm
            }])
    
            setInput("")
        }
    }

    return (
        <div className={styles.chat} >
            <div className={showChat ? styles.show : styles.left}>
                <div className={styles.groups}>
                    <div className={styles.header}>
                        <div className={styles.indicator}></div>
                        <span>Groups</span>
                    </div>
                    <div className={styles.users}>
                        <GroupCard></GroupCard>
                    </div>           
                </div>
                <div className={styles.onlines}>
                    <div className={styles.header}>
                        <div className={styles.indicator}></div>
                        <span>Onlines</span>
                    </div>
                    <div className={styles.users}>
                        {
                            users?.map(u => (
                                u.status === 'Online' ?
                                <div onClick={ () => {
                                        setCurrentChat(u)
                                        if (window.innerWidth <= 500) {
                                            setShowChat(!showChat)
                                        }
                                    }}>
                                    <Card
                                    id = {u.id}
                                    name = {u.name}
                                    status = {u.status}
                                />
                                </div>
                                : null
                            ))
                        }
                    </div>
                </div>
                <div className={styles.offlines}>
                    <div className={styles.header}>
                        <div className={styles.indicator}></div>
                        <span>Offlines</span>
                    </div>
                    <div className={styles.users}>
                    {
                            users?.map(u => (
                                u.status === 'Offline' ? 
                                <Card
                                    id = {u.id}
                                    name = {u.name}
                                    status = {u.status}
                                />
                                : null
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={showChat ? styles.hide : styles.right}>
                <div
                    className={styles.hamburger}
                    onClick= {() => {
                        setShowChat(!showChat)
                    }}
                    >
                    <div className={styles.hamburgerEl}></div>
                    <div className={styles.hamburgerEl}></div>
                    <div className={styles.hamburgerEl}></div>
                </div>
                <div className={styles.chatHeader}>
                    <ChatHeader
                        name = {currentChat?.name}
                    />
                </div>
                <div className={styles.messages}>
                    {messages?.map((m)=> ( 
                        <div ref={scrollRef}>
                             <Message
                            type={m.senderID === userID ? "sent" : "recieved"}
                            time={m.time}
                            >
                            {m.text}
                            </Message>
                        </div>
                    ))}
                </div>
                <div className={styles.input}>
                    <input onKeyPress={sendMessageKeyPress} placeholder="Type something to send message..." type="text" value={input} onChange={e => setInput(e.target.value)}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chat
