import React from 'react'
import styles from './chatheader.module.css'

const ChatHeader = ( {photo, name} ) => {
    return (
        <div>
            <img src={photo}/>
            <span>{name}</span>
        </div>
    )
}

export default ChatHeader
