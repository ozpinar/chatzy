import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Chat/chat.module.css'
import styles2 from './logs.module.css'
import Message from '../../components/Message/Message'
import Card from '../../components/Card/Card'
import GroupCard from '../../components/GroupCard/GroupCard'
import ConversationCard from '../../components/ConversationCard/ConversationCard'
import ChatHeader from '../../components/ChatHeader/ChatHeader'
import { data } from '../../dummy/conversations'
import Send from '../../images/send.svg'

const Logs = () => {
    const [messages, setMessages] = useState()
    const [input, setInput] = useState("")
    const [conversations, setConversations] = useState()
    const [currentChat, setCurrentChat] = useState()
    const [showChat, setShowChat] = useState(false)
    const scrollRef = useRef()
    const userType = "admin"
    const userID = 1
    let id = 1
    
    useEffect(()=>{
        setMessages([]);
        setConversations(data.conversations);
    },[])

    useEffect(()=>{
        scrollRef.current?.scrollIntoView( {behavior: "smooth"} )
    },[messages])


    return (
        <div className={styles.chat} >
            <div className={showChat ? styles.show : styles.left}>
                <div className={styles.groups}>
                    <div className={styles.header}>
                        <div className={styles.indicator}></div>
                        <span>Chats</span>
                    </div>
                    <div className={styles.users}>
                        {
                            conversations?.map(c => (
                                <div onClick={ () => {
                                    setCurrentChat(c)
                                    if (window.innerWidth <= 700) {
                                        setShowChat(!showChat)
                                    }
                                }}>
                                    <ConversationCard
                                        id = {c.id}
                                        member1 = {c.member1}
                                        member2 = {c.member2}
                                        current = {currentChat === c}
                                    />
                                </div>
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
                    {userType === 'admin' ?
                    <Link className={styles.logslink} to="/"><button className={styles2.logs}>Back</button></Link>
                    : null
                    }
                    {
                    currentChat ?
                    <ChatHeader
                        member1 = {currentChat?.member1}
                        member2 = {currentChat?.member2}
                    />
                    :
                    null
                    }
                </div>
                <div className={styles.messages}>
                    {currentChat ? messages?.map((m)=> ( 
                        <div ref={scrollRef}>
                             <Message
                            type={m.senderID === userID ? "sent" : "recieved"}
                            time={m.time}
                            >
                            {m.text}
                            </Message>
                        </div>
                    ))
                    :
                    <h3 className={styles.noChat} >Select a chat from left to see logs.</h3>
                }
                </div>
            </div>
        </div>
    )
}

export default Logs
