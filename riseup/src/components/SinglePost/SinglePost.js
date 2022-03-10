import { React, useState } from "react";
// import { useNavigate } from 'react-router-dom'
import "../SinglePost/singlePost.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPenToSquare,
//   faTrashCan,
//   faComment,
//   faHeart,
// } from "@fortawesome/free-solid-svg-icons";

//images are a futures dev
// import logoImg  from '../../assets/images/riseup.png'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const SinglePost = (props) => {
  // let navigate = useNavigate();


  return (
    <div>
      {/* {edit ? } */}
      <div className="singlePost" id={props.id} onClick={() => props.getSinglePost() ? props.getSinglePost(props.id) : null}>
        <div className="singlePostWrapper">
          {/* images are a futures dev */}
          {/* <img className="imgSinglePost" src={logoImg} alt="rise up" /> */}
          <h1 className="singlePostTitle">{props.title}</h1>
          <div className="singlePostInfo">
            <div className="singlePostEdit">

              <span className="singlePostAuthor">Author: <b>{props.author}</b>{" "}</span>
              <span className="singlePostAuthor">{props.createdAt}</span>
            </div>
            <div className="singlePostBody">
              <p className="singlePostBody-p">
                {props.body}
              </p>
              {/* <div className="singlePostCommentIcon">
                <div className="first-icon" ><FontAwesomeIcon className="singlePostIcon" icon={faPenToSquare} /></div>
                <div className="last-icon"><FontAwesomeIcon className="singlePostIcon" icon={faTrashCan} /></div>
              </div> */}
            </div>
          </div>
          {/* <div className="singlePostCommentIcon singlePostCommentBox">
            <div className="first-icon"><FontAwesomeIcon className="singlePostIcon" icon={faComment} /></div>
            <div className="last-icon"><FontAwesomeIcon className="singlePostIcon" icon={faHeart} /></div>
          </div> */}
        </div>
      </div>
    </div>


  );
};

export default SinglePost;
