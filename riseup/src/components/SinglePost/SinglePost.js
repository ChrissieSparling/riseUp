import { React, useState } from "react";
import "../SinglePost/singlePost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const SinglePost = (props) => {

  return (

    <div className="singlePost" id={props.id} onClick={() => props.getSinglePost() ? props.getSinglePost(props.id) : null}>
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">{props.title}</h1>
        <div className="singlePostInfo">
          <div className="singlePostEdit">

            <span className="singlePostAuthor">Author: <b>{props.author}</b>{" "}</span>
            <span className="singlePostAuthor">{props.createdAt}</span>
          </div>

          <p className="singlePostBody-p">
            {props.body}
          </p>
          {/* {props.likeCount > null ? (
            <div
              className="last-icon icon comment-icon post-icon"
            >
              <FontAwesomeIcon
                className="singlePostIcon"
                icon={faHeart}
              />
              <p>{props.likeCount} Likes</p></div>) : null} */}
{/* 
          {props.likeCount > null ? (
            (<div className="first-icon icon comment-icon post-icon">
              <FontAwesomeIcon className="singlePostIcon" icon={faComment} />
              <p>Comment</p>
            </div>) : null} */}

        {props.comments ? (
            <div
              className="last-icon icon comment-icon post-icon"
            >
              <FontAwesomeIcon
                className="singlePostIcon"
                icon={faComment}
              />
              <p>{props.comments.length} Comments</p></div>) : null}


        </div>
      </div>
    </div>




  );
};

export default SinglePost;
