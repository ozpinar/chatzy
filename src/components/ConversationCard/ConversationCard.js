import React from 'react'
import ChatIcon from '../../images/chat.svg'
import styles from './conversationcard.module.css'

const ConversationCard = ( {member1, member2, group, current = false} ) => {

    const cardStyles = {
        backgroundColor: current ? '#348C74' :'#CEE4DE',
        color: current ? 'white' : 'black',
        borderColor: current ? '#CEE4DE' : '#348C74',
        cursor: 'pointer',
    }


    return (
        <div className={styles.container}>
            <div style = {cardStyles} className={styles.conversationcard} >
                <div className={styles.photo}>
                    <img src={ChatIcon}/>
                </div>
                <div className={styles.info}>
                    <span>{member1}</span>
                    <span>{member2}</span>
                </div>
            </div>
        </div>
    )
}

export default ConversationCard
