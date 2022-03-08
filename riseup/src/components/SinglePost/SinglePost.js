import React from "react";
import "../SinglePost/singlePost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

//images are a futures dev
// import logoImg  from '../../assets/images/riseup.png'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {/* images are a futures dev */}
        {/* <img className="imgSinglePost" src={logoImg} alt="rise up" /> */}
        <h1 className="singlePostTitle">Title of forum</h1>
        <div className="singlePostInfo">
          <div className="singlePostEdit">

            <span className="singlePostAuthor">Author: <b>Heather</b>{" "}</span>
            <span className="singlePostAuthor">1 hour ago </span>
          </div>
          <div className="singlePostBody">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
              ipsa omnis libero sint magni tempora tempore voluptas exercitationem
              doloribus, sit neque, ratione at non dolorem molestiae ipsum et
              veritatis ullam?
            </p>
            <div className="singlePostCommentIcon">
              <FontAwesomeIcon className="singlePostIcon" icon={faPenToSquare} />
              <FontAwesomeIcon className="singlePostIcon" icon={faTrashCan} />
            </div>
          </div>
        </div>
        <div className="singlePostCommentIcon singlePostCommentBox">
        <FontAwesomeIcon className="singlePostIcon" icon={faComment} />
        <FontAwesomeIcon className="singlePostIcon" icon={faHeart} />
        </div>
      </div>
    </div>
    

  );
};

export default SinglePost;
