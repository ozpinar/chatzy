import React, {createContext, useState, useEffect} from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ( {children} ) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={[user, setUser]} >
            {children}
        </AuthContext.Provider>
    )
}

