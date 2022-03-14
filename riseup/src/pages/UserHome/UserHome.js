import { React, useState, useEffect } from "react";
import useAuth from '../../utils/hooks/useAuth'
import "./UserHome.css";
import UserHomeMenu from "../../components/UserHomeMenu/UserHomeMenu";
import ForumTopicHome from "../ForumTopic/ForumTopic";
import { useNavigate, useParams } from "react-router-dom";
import TodoList from '../../components/Todo/TodoList'
// import useAuth from '../../utils/AuthProvider'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPenToSquare,
//   faTrashCan,
//   faComment,
//   faHeart,
// } from "@fortawesome/free-solid-svg-icons";
import API from "../../utils/API";

const UserHome = (props) => {
    let navigate = useNavigate();
    

    return (
        <div></div>

  );
};

export default UserHome;
