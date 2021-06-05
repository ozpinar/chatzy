import React, {useContext, useEffect, useState} from 'react'
import styles from './card.module.css'
import Photo from '../../images/pp.svg'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

const Card = ( {name = "Berk Ozpinar", status = "Online", photo = Photo, current = true, conversation, currentUser} ) => {
    const [user, setUser] = useContext(AuthContext)
    const [currentUserState, setCurrentUserState] = useState()
    
    useEffect(() => {
        const getUser = async () => {
            try {
                if(!currentUser){
                    return
                }
                const res = await axios.get(`https://chatzy01app.herokuapp.com/api/users/getUser/${currentUser.userId}`)
                setCurrentUserState(res.data.data)
            }catch (e) {
                console.log(e.response)
            }
    
        }
        getUser();
    }, [])

    const indicator = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: status === "Online" ? "#19B532" : "#B51919",
    }

    const cardStyles = {
        backgroundColor: current ? '#348C74' :'#CEE4DE',
        color: current ? 'white' : 'black',
        borderColor: current ? '#CEE4DE' : '#348C74',
        cursor: 'pointer',
    }
    let friend = conversation?.members.find(m => m._id !== user._id)

  


    
    if (currentUser) {
        
        return (
            <div className={styles.cardContainer}>
                <div style = {cardStyles} className={styles.card}>
                    <div className={styles.photo}>
                        <img src={photo} alt="" />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.top}>
                            <div style={indicator} ></div>
                            <span>{currentUserState?.firstName} {currentUserState?.lastName}</span>
                        </div>
                        <span>{status}</span>
                    </div>
                </div>
            </div>
        )
    }


    if (conversation) {
        return (
            <div className={styles.cardContainer}>
                <div style = {cardStyles} className={styles.card}>
                    <div className={styles.photo}>
                        <img src={photo} alt="" />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.top}>
                            <span>{friend.firstName} {friend.lastName}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.cardContainer}>
            <div style = {cardStyles} className={styles.card}>
                <div className={styles.photo}>
                    <img src={photo} alt="" />
                </div>
                <div className={styles.info}>
                    <div className={styles.top}>
                    { status !== "no status" ? <div style={indicator} ></div> : null}
                        <span>{name}</span>
                    </div>
                    { status !== "no status" ? <span>{status}</span> : null}
                </div>
            </div>
        </div>
    )
}

export default Card
