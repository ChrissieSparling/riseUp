import React, {useState, createContext, useEffect} from 'react'
// import { useNavigate } from "react-router-dom"
import API from "./API"


// const useAuth = async () => {
//     let navigate = useNavigate();
//     const token = localStorage.getItem('token')
//     const auth = await API.getTokenData(token)
//     if(auth.userId){
//         console.log('this is auth',auth)
//     } else {
//         alert('You need to log in again!')
//         navigate('/login')
//     }
// }
// const URL = 'https://rise-up-back-end.herokuapp.com'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const token = localStorage.getItem("token")
    const [auth, setAuth] = useState({
        loading: true
    });
    // const [currentUser, setCurrentUser] = useState({
    //     userId: '',
    //     userName: '', 
    //     role: [], 
    //     token: ''
    // })

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
              // setUserId(data.id);
              // setUsername(data.username);
              // setToken(token);
            })
            .catch(err => {
              console.log(err);
            });
        } else {console.log('no token')}
      }, []);


        // setAuth(currentUser)
        console.log('we\'re looking at auth', auth)


    return (
        <AuthContext.Provider value={{ auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;


// export function ProvideAuth({children}){
//     const auth = useProvideAuth();
//     return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
// }

// export const useAuth = () => {
//     return useContext(AuthContext);
// }

// function useProvideAuth() {
//     const [user, setUser] = useState(null);
//     const [errors, setErrors] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     function signIn(username, password){
//         setIsLoading(true);
//         fetch(`${URL}/users/login`,{
//             method: "POST",
//             body: JSON.stringify({
//               username: username,
//               password: password
//             }),
//             headers: {
//               "Content-Type": "application/json"
//             }
//         }).then(res=>{
//             setIsLoading(false);
//             if(res.ok){
//                 res.json()
//                 .then(user=>{
//                     setUser(user);
//                 });
//             } else {
//                 res.json().then(err=>setErrors(err.errors));
//             }
//         });
//     }
//     function signUp(newUser){
//         // const navigate = useNavigate();
//         setErrors([]);
//         setIsLoading(true);
//         fetch(`${URL}/users/new`,{
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               firstName: newUser.firstName,
//               lastName: newUser.lastName,
//               username: newUser.username,
//               password: newUser.password,
//               role: newUser.role,
//               email: newUser.email,
//               birthday: parseInt(newUser.birthday.split('-').reverse().join('-')),
//               zipCode: newUser.zipCode,
//             }),
//         })
//         .then((resp) => {
//             setIsLoading(false);
//             if(resp.ok){
//                 resp.json().then(user=>{
//                     localStorage.setItem("token", user.accessToken);
//                     setUser(user)
//                     // navigate(`/users/${user.id}`)
//                 });
//             } else{
//                 alert('Your request was not successful. \nPlease check the form and try again.');
//                 console.log('front end post req prob:', resp)
//                 resp.json().then(err=>{
//                     console.log('problem', err.errors)
//                     setErrors(err.errors)
//                 });
//             }
//         })
//     };
//     return { 
//         user,
//         signIn,
//         signUp,
//         errors,
//         isLoading
//     }
// }
