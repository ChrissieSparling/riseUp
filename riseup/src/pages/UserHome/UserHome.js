import { React, useState, useEffect } from "react";
import "./UserHome.css";
import UserHomeMenu from "../../components/UserHomeMenu/UserHomeMenu";
import ForumTopicHome from "../ForumTopic/ForumTopic";
import { useNavigate, useParams } from "react-router-dom";
import TodoList from '../../components/Todo/TodoList'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const UserHome = (props) => {
    let navigate = useNavigate();
    let { id } = useParams();
    const [uHomePosts, setUHomePosts] = useState([]);
    const [uHomePostsFoll, setUHomePostsFoll] = useState([]);
    const [uHomeComments, setUHomeComments] = useState([]);
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [userAff, setUserAff] = useState("");
    const [userAffAuth, setUserAffAuth] = useState("");

    useEffect(() => {
        console.log(id);
        fetch(`https://rise-up-back-end.herokuapp.com/users/${props.userId || id}`, {
            method: "GET",
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("=================userData", responseJson);
                setUsername(responseJson.username);
                setUserId(responseJson.id);
                setUHomePosts(responseJson.Posts)
                setUHomeComments(responseJson.Comments)
                console.log('Here are the comments',uHomeComments)
            })
            .catch((err) => {
                console.log(err);
                alert(`There was an error: ${err}`);
            })

            const randNum = Math.floor(Math.random() * 30 + 1)
            fetch(`https://rise-up-back-end.herokuapp.com/affirmations/${randNum}`, {
                method: "GET",
                // headers: {
                //     "x-access-token": localStorage.getItem("token"),
                // },
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("=================affData", responseJson);
                    setUserAff(responseJson.body);
                    setUserAffAuth(responseJson.authorName);
                    console.log('Here are the comments',uHomeComments)
                })
                .catch((err) => {
                    console.log(err);
                    alert(`There was an error: ${err}`);
                })
            // const postsFollIDs = .filter(comment=>{ return comment.postId})
            // console.log('post ids', postsFollIDs)
            // if(uHomeComments){
            //     const postIDs = [];
            //     uHomeComments.forEach(c=>postIDs.push(c.postId))
            //     postIDs.forEach(postID=>{
            //         fetch(`http://localhost:3005/users/${postID}`,{
            //             method: "GET",
            //             headers: {
            //                 "x-access-token": localStorage.getItem("token"),
            //             },
            //         })
            //             .then((response) => response.json())
            //             .then((responseJson) => {
            //                 console.log("=================postsFollData", responseJson);
            //                 uHomePostsFoll.push(responseJson)
                    
            //                 console.log('Here\'s the post', responseJson)
            //             })
            //             .catch((err) => {
            //                 console.log(err);
            //                 alert(`There was an error: ${err}`);
            //             })
            //     })
                
            // }
            
        // setUsername(username);
        // setUserId(userId)
    }
    ,[]);
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

    return (
        <div className="user-home">
            <h1 className="user-welcome">Hello {username}</h1>
            <div className='aff-box'>
                <h2>Your Daily Dose of Dopamine:</h2>
                <p style={{fontWeight: 'bold', fontSize:'2rem'}}>{userAff}</p>
                <p>{userAffAuth}</p>
                <div className="last-icon icon aff-icon"><FontAwesomeIcon className="singlePostIcon" icon={faHeart} /><p>Like</p></div>
            </div>
            
            <div className="user-post-list">
                <h1>MyPosts:</h1>
            {uHomePosts ? (uHomePosts.map(post=>{
                return (<h1 key={post.id} onClick={()=>navigate(`/forums/post/${post.id}`)} className="user-post-title">{post.title}</h1>)
            })) : <h1>You don't have any posts</h1>}
            </div>
            <div className="user-post-list">
                <h1>My Dopamine Supply</h1>
            </div>
            <div>
                <div className="user-home-btn-box">
                    <h2>What would you like to do?</h2>
                    <button className="btnUseHome" onClick={() => navigate("/forums")}>Visit the Forums</button>
                    <button className="btnUseHome">Visit ToDos</button>
                    <button className="btnUseHome">Read a Story</button>

                </div>
                <div className="todo-app">
                    <TodoList />
                </div>
            </div>
        </div>
    );
};

export default UserHome;
