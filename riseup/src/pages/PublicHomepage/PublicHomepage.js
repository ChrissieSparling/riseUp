import './PublicHomepage.css'
import {React, useState} from 'react'
import { Redirect, Route, useLocation } from "react-router-dom"
import SignUp from '../../components/SignUp/SignUp'
import Login from '../../components/Login/Login'

const PublicHomepage = () => {
    const location = useLocation();
    const [loggedIn, setLoggedIn] = useState(false)
    const [newUser, setNewUser] = useState(false)

    if (loggedIn) {
        return <Redirect to={{pathname: "/forums"}} />
    }


    const handleLoggedIn = () => {
        setLoggedIn(true);
    }

    const handleNewUser = e => {
        e.preventDefault();
        if(e.target.id==='login'){
            setNewUser(false);
        } else {setNewUser(true);}
    }


    return(
        <div>
            {newUser ? <SignUp handleNewUser={handleNewUser}/> : <Login handleLoggedIn={handleLoggedIn} handleNewUser={handleNewUser}/>}

        </div>

    )
}

export default PublicHomepage