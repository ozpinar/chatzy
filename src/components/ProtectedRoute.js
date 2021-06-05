import React, { useContext } from 'react'
import {Route, Redirect} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const ProtectedRoute = ({component: Component, ...rest}) => {
    const [user, setUser] = useContext(AuthContext)

    return (
            <Route {...rest} 
            render={(props) => {
                    if( user ){
                    return <Component {...props}/>
                    }
                    else{
                        return (
                            <Redirect
                                to={{
                                    pathname: "/",
                                    state: {
                                        from: props.location
                                    }
                                }}
                            />
                        )
                    }
                }} 
            />   
    )
}

export default ProtectedRoute