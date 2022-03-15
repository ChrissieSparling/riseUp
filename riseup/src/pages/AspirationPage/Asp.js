import { useState, useEffect } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import API from "../../utils/API";
import useAuth from "../../utils/hooks/useAuth";
import UserHome from "../UserHome/UserHome";
import ModHome from "../ModHome/ModHome";
import AdminHome from "../AdminHome/AdminOne";
import TodoList from "../../components/Todo/TodoList";
import "./Asp.css"
import happyImg from "../../assets/images/happyFlower.png";

const Asp = () => {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [uHomePosts, setUHomePosts] = useState([]);
  const [userAsp, setUserAsp] = useState("");
  const [userAspAuth, setUserAspAuth] = useState("");
  const { auth } = useAuth();
  const navigate = useNavigate();
  
//   const roleName = role.toUpperCase();

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
    const randNum = Math.floor(Math.random() * 11 + 1);
    API.getQuote(randNum)
      .then((responseJson) => {
        console.log("=================AspData", responseJson);
        setUserAsp(responseJson.body);
        setUserAspAuth(responseJson.authorName);
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


        <div className="postHome cursorHome">
          <div className="postInfoHome">
            <div className="postCatsHome">
              <img className="flowerImg" src={happyImg} />
             
              <hr />

              <p className="postSubHome">
              {userAsp}
              </p>
              <p>
                  {userAspAuth}
              </p>
            </div>
          </div>
        </div>
       
        <div className="postHome cursorHome">
          <div className="postInfoHome">
            <div className="postCatsHome">
              <img className="flowerImg" src={happyImg} />
             
              <hr />

              <p className="postSubHome">
              {userAsp}
              </p>
              <p>
                  {userAspAuth}
              </p>
            </div>
          </div>
        </div>
        
        <div className="postHome cursorHome">
          <div className="postInfoHome">
            <div className="postCatsHome">
              <img className="flowerImg" src={happyImg} />
             
              <hr />

              <p className="postSubHome">
              {userAsp}
              </p>
              <p>
                  {userAspAuth}
              </p>
            </div>
          </div>
        </div>     
    </div>
  </div>
    </>
  );
};

export default Asp;
