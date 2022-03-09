import {React, useState, useEffect} from 'react'
import './UserHome.css'
import UserHomeMenu from '../../components/UserHomeMenu/UserHomeMenu'
import ForumTopicHome from '../ForumTopic/ForumTopic'
import {useNavigate} from 'react-router-dom'

const UserHome = (props) => {
    let navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [userId, setUserId] = useState('')

    useEffect(()=>{
        setUsername(props.username);
        setUserId(props.userId)
    }, [])
    // const [getForum, setGetForum] = useState(false)
    // const [getToDos, setGetToDos] = useState(false)
    // const [getStory, setGetStory] = useState(false)
    // const [currentUser, setCurrentUser] = useState({})
    // const [getMenu, setGetMenu] = useState(true)


//   setCurrentUser({
//       username: user.username,
//       role: user.role
//   })
//   console.log('userdata',currentUser)
//     if (!getForum && !getToDos && !getStory){
//         setGetMenu(true);
//     }


    return(

        <div className="user-home">

            {/* {getMenu ? <UserHomeMenu {...currentUser} setGetMenu={setGetMenu} setGetForum={setGetForum} setGetToDos={setGetToDos} setGetStory={setGetStory}/> : null}
            {getForum ? <ForumTopicHome/> : null} */}
            
            <div>
                <h1>Hello {username}</h1>
                <div className="user-home-btn-box">
                    <h2>What would you like to do?</h2>
                    <button onClick={()=>navigate('/forums')}>Visit the Forums</button>
                    <button >Visit ToDos</button>
                    <button >Read a Story</button>
                </div>
            </div>
        </div>
    );
}

export default UserHome