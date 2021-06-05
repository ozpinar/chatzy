import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Chat/chat.module.css'
import styles2 from './logs.module.css'
import Message from '../../components/Message/Message'
import Card from '../../components/Card/Card'
import GroupCard from '../../components/GroupCard/GroupCard'
import ConversationCard from '../../components/ConversationCard/ConversationCard'
import ChatHeader from '../../components/ChatHeader/ChatHeader'
import Send from '../../images/send.svg'
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Logs = () => {
    const [messages, setMessages] = useState()
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState()
    const [showChat, setShowChat] = useState(false)
    const [loading, setLoading] = useState(false)
    const scrollRef = useRef()
    const userType = "admin"

    useEffect(()=>{
        const getConversations = async () => {
            try {
                const res = await axios.get("https://chatzy01app.herokuapp.com/api/conversations/getAllConversations")
                setConversations(res.data.data)
            }catch(e) {
                console.log(e.response)
            }

        }
        getConversations()
    },[])

    const getMessages = async (id) => {
        setLoading(true)
        //Get messages from a conversation
        try {
            const res = await axios.get(`https://chatzy01app.herokuapp.com/api/messages/getMessages/${id}`)
            setMessages(res.data.data)
            setLoading(false)
        } catch (e) {
            console.log(e.response)
            setLoading(false)
        }
    }

    useEffect(()=>{
        scrollRef.current?.scrollIntoView( {behavior: "smooth"} )
    },[messages, loading])

    const addZero = (i) => {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
    }   


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
                                    getMessages(c._id)
                                    if (window.innerWidth <= 700) {
                                        setShowChat(!showChat)
                                    }
                                }}> 
                                { c.members?.length < 3 ?
                                    <ConversationCard
                                       member1 = {`${c.members[0].firstName} ${c.members[0].lastName}`}
                                       member2 = {`${c.members[1].firstName} ${c.members[1].lastName}`}
                                       current = {currentChat === c ? true : false}
                                    />
                                    :
                                    <ConversationCard
                                       member1 = {`${c.members[0].firstName} ${c.members[0].lastName}`}
                                       member2 = {`${c.members[1].firstName} ${c.members[1].lastName}`}
                                       current = {currentChat === c ? true : false}
                                       group = "true"
                                    />
                                }
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
                    <Link className={styles.logslink} to="/chat"><button className={styles2.logs}>Back</button></Link>
                    : null
                    }
                    {
                    currentChat ?
                    currentChat.members?.length < 3 ?
                    <ChatHeader
                        member1 = {currentChat?.members[0].firstName}
                        member2 = {currentChat?.members[1].firstName}
                    />
                    :
                    <ChatHeader
                        group = "true"
                    />
                    :
                    null
                    }
                </div>
                <div className={styles.messages}>
                    {!loading ? currentChat ? messages.length > 0 ? messages?.map((m)=> ( 
                        <div ref={scrollRef}>
                             <Message
                                name={m.senderId?.firstName}
                                type={m.senderId?._id === currentChat?.members[0]?._id ? "sent" : "recieved"}
                                time={addZero(new Date(m.createdAt).getHours()) + ':' + addZero(new Date(m.createdAt).getMinutes())}
                            >
                            {m.text}
                            </Message>
                        </div>
                    ))
                    :
                    <h3 className={styles.noMsg} >There are no logs for this conversation.</h3>
                    :
                    <h3 className={styles.noChat} >Select a chat from left to see logs.</h3>
                    :
                   <div style={{textAlign:'center'}} >
                        <Loader
                            type="ThreeDots"
                            color="#348C74"
                            height={70}
                            width={70}
                            timeout={3000} //3 secs
                        />
                   </div>
                }
                </div>
            </div>
        </div>
    )
}

export default Logs
