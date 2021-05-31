import React from 'react'
import styles from './chatheader.module.css'
import Photo from '../../images/pp.svg'
import ConversationIcon from '../../images/chat.svg'


const ChatHeader = ( {photo = Photo, name = "Muhammed Sedef", member1, member2} ) => {
    if (member1 && member2) {
        return (
            <div className = {styles.chatHeader}>
                <img src={ConversationIcon}/>
                <span>{member1}</span>
                <span>&</span>
                <span>{member2}</span>
            </div> 
        )
    }

    return (
        <div className = {styles.chatHeader}>
            <img src={photo}/>
            <span>{name}</span>
        </div>
    )
}

export default ChatHeader
