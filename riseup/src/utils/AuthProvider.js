import React, {useState, createContext, useEffect} from 'react'
import API from "./API"

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const token = localStorage.getItem("token")
    const [auth, setAuth] = useState({
        loading: true
    });

    useEffect(() => {
        if (token) {
          API.getTokenData(token)
            .then(data => {
              console.log(data);
                setAuth({
                    userId: data.userId, 
                    userName: data.username, 
                    role: data.role, 
                    token: token,
                    loading: false
                })
            })
            .catch(err => {
              console.log(err);
            });
        } else {console.log('no token')}
      }, []);

        console.log('we\'re looking at auth', auth)


    return (
        <AuthContext.Provider value={{ auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

