import { useState, useEffect } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import API from "../../utils/API";
import useAuth from "../../utils/hooks/useAuth";
import UserHome from "../UserHome/UserHome";
// import ModHome from "../ModHome/ModHome";
// import AdminHome from "../AdminHome/AdminOne";
// import TodoList from "../../components/Todo/TodoList";
import "./Phil.css";
import happyImg from "../../assets/images/happyFlower.png";

const Phil = () => {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [uHomePosts, setUHomePosts] = useState([]);
  const [userPhil, setUserPhil] = useState("");
  const [userPhilAuth, setUserPhilAuth] = useState("");
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
    API.getPhil(randNum)
      .then((responseJson) => {
        console.log("=================PhilData", responseJson);
        setUserPhil(responseJson.body);
        setUserPhilAuth(responseJson.authorName);
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
      <div className="user-phil">
        <div className="postPhil">
          <div className="postInfoPhil">
            <div className="postCatsPhil">
              <img className="flowerImgPhil" src={happyImg} />

              <p className="postSubPhil">{userPhil}</p>
              <p>{userPhilAuth}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phil;
