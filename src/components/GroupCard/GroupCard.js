import React from 'react'
import styles from './groupcard.module.css'
import Photo from '../../images/group-pp.svg'

const Card = ( {name = "Everyone", status = "Online", photo = Photo} ) => {
    const indicator = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: status === "Online" ? "#19B532" : "#B51919",
        visibility: 'hidden',
    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.photo}>
                    <img src={photo} alt="" />
                </div>
                <div className={styles.info}>
                    <div style={indicator} ></div>
                    <span>{name}</span>
                </div>
            </div>
        </div>
    )
}

export default Card
