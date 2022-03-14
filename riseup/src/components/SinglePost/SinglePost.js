import { React, useState } from "react";
import "../SinglePost/singlePost.css";

const SinglePost = (props) => {

  return (
    <div>
      <div className="singlePost" id={props.id} onClick={() => props.getSinglePost() ? props.getSinglePost(props.id) : null}>
        <div className="singlePostWrapper">
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
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default SinglePost;
