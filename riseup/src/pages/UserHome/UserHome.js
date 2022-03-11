import { React, useState, useEffect } from "react";
import "./UserHome.css";
import UserHomeMenu from "../../components/UserHomeMenu/UserHomeMenu";
import ForumTopicHome from "../ForumTopic/ForumTopic";
import { useNavigate, useParams } from "react-router-dom";
import TodoList from '../../components/Todo/TodoList'

const UserHome = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:3005/users/${id}`, {
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
      })
      .catch((err) => {
        console.log(err);
        alert(`There was an error: ${err}`);
      });
    // setUsername(username);
    // setUserId(userId)
  }, []);
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
      {/* {getMenu ? <UserHomeMenu {...currentUser} setGetMenu={setGetMenu} setGetForum={setGetForum} setGetToDos={setGetToDos} setGetStory={setGetStory}/> : null}
            {getForum ? <ForumTopicHome/> : null} */}

      <div>
        <h1>Hello {username}</h1>
        <div className="user-home-btn-box">
          <h2>What would you like to do?</h2>
          <button onClick={() => navigate("/forums")}>Visit the Forums</button>
          <button>Visit ToDos</button>
          <button>Read a Story</button>
        </div>
        <div className="todo-app">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default UserHome;
