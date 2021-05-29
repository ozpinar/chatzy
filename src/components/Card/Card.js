import React from 'react'
import styles from 'card.module.css'

const Card = ( {name, status, photo} ) => {
    return (
        <div>
            <div className={styles.photo}></div>
            <div className={styles.info}></div>
        </div>
    )
}

export default Card
