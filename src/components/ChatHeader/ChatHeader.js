import React from 'react'
import styles from './chatheader.module.css'
import Photo from '../../images/pp.svg'


const ChatHeader = ( {photo = Photo, name = "Muhammed Sedef"} ) => {
    return (
        <div className = {styles.chatHeader}>
            <img src={photo}/>
            <span>{name}</span>
        </div>
    )
}

export default ChatHeader
