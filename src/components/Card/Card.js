import React from 'react'
import styles from './card.module.css'
import Photo from '../../images/pp.svg'

const Card = ( {name = "Berk Ozpinar", status = "Online", photo = Photo} ) => {
    const indicator = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: status === "Online" ? "#19B532" : "#B51919",
    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.photo}>
                    <img src={photo} alt="" />
                </div>
                <div className={styles.info}>
                    <div className={styles.top}>
                        <div style={indicator} ></div>
                        <span>{name}</span>
                    </div>
                    <span>{status}</span>
                </div>
            </div>
        </div>
    )
}

export default Card
