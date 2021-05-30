import React, { useState, useEffect, useRef } from 'react'
import styles from './chat.module.css'
import Message from '../../components/Message/Message'
import Card from '../../components/Card/Card'
import GroupCard from '../../components/GroupCard/GroupCard'
import ChatHeader from '../../components/ChatHeader/ChatHeader'

const Chat = () => {
    const [messages, setMessages] = useState()
    const [input, setInput] = useState("")
    const scrollRef = useRef()
    const userID = 1
    let id = 1
    
    useEffect(()=>{
        setMessages([]);
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
            <div className={styles.left}>
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
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                </div>
                <div className={styles.offlines}>
                    <div className={styles.header}>
                        <div className={styles.indicator}></div>
                        <span>Offlines</span>
                    </div>
                    <div className={styles.users}>
                        <Card status="Offline" ></Card>
                        <Card status="Offline"></Card>
                        <Card status="Offline" ></Card>
                        <Card status="Offline"></Card>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.chatHeader}>
                    <ChatHeader></ChatHeader>
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
