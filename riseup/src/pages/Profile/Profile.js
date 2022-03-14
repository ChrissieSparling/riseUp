import { useState, useEffect } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import API from "../../utils/API";
import useAuth from "../../utils/hooks/useAuth";
import UserHome from "../UserHome/UserHome";
import ModHome from "../ModHome/ModHome";
import AdminHome from "../AdminHome/AdminOne";
import TodoList from "../../components/Todo/TodoList";

const Profile = () => {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [uHomePosts, setUHomePosts] = useState([]);
  const [userAff, setUserAff] = useState("");
  const [userAffAuth, setUserAffAuth] = useState("");
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const roleName = role.toUpperCase();

  useEffect(() => {
    setRole(auth.role);
  }, []);

  useEffect(() => {
    API.getUser(auth.userId)
      .then((responseJson) => {
        console.log("=================userData", responseJson);
        setUsername(responseJson.username);
        setUHomePosts(responseJson.Posts);
        // setUHomeComments(responseJson.Comments)
        // console.log('Here are the comments',uHomeComments)
      })
      .catch((err) => {
        console.log(err);
        alert(`There was an error: ${err}`);
      });
  }, []);

  useEffect(() => {
    const randNum = Math.floor(Math.random() * 30 + 1);
    API.getAff(randNum)
      .then((responseJson) => {
        console.log("=================affData", responseJson);
        setUserAff(responseJson.body);
        setUserAffAuth(responseJson.authorName);
        // console.log('Here are the comments',uHomeComments)
      })
      .catch((err) => {
        console.log(err);
        alert(`There was an error: ${err}`);
      });
  }, []);
  // setRole(auth.role[0])
  console.log("this is the user role", auth.role);
  return (
    <>
      <div className="user-home">
        <div className="random">
          <h1 className="user-welcome">
            Hello {username}! This is the {roleName} homepage!
          </h1>
          <div className="aff-box">
            <h2>Your Daily Dose of Dopamine:</h2>
            <p style={{ fontWeight: "bold", fontSize: "2rem" }}>"{userAff}"</p>
            <p>- {userAffAuth}</p>
          </div>

          <div className="user-post-list">
            <h1>MyPosts:</h1>
            {uHomePosts ? (
              uHomePosts.map((post) => {
                return (
                  <h1
                    key={post.id}
                    onClick={() => navigate(`/forums/post/${post.id}`)}
                    className="user-post-title"
                  >
                    {post.title}
                  </h1>
                );
              })
            ) : (
              <h1>You don't have any posts</h1>
            )}
          </div>

          <div>
            <div className="user-home-btn-box">
              <h2>What would you like to do?</h2>
              <button
                className="btnUseHome"
                onClick={() => navigate("/forums")}
              >
                Visit the Forums
              </button>
              {/* <button className="btnUseHome">Visit ToDos</button>
                    <button className="btnUseHome">Read a Story</button> */}
              {auth.role === "paidUser" ? (
                <UserHome />
              ) : auth.role === "mod" ? (
                <ModHome />
              ) : auth.role === "admin" ? (
                <AdminHome />
              ) : (
                <Navigate to="/login" state={{ from: location }} replace />
              )}
            </div>
          </div>
        </div>
        <div className="checklist">
          <div className="todo-app">
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
