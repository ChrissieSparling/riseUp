import { React, useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import "../SingleForum/singleForum.css"
import SinglePost from '../../components/SinglePost/SinglePost'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faComment,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const SingleForum = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [post, setPost] = useState({})
  // let navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => console.log('this is a delay'), 500)
    clearTimeout(timer)
    console.log(id)
    fetch(`http://localhost:3005/posts/${id}`, {
      method: 'GET',
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(responseJson => {

        console.log('=================postData', responseJson)
        setPost(responseJson)
      }).catch(err => {
        console.log(err)
        alert(`There was an error: ${err}`)
      })

  }, []);

  const goEdit = e => {
    e.preventDefault();
    console.log(post.id)
    navigate(`/forums/edit/post/${post.id}`)
  }

  return (
    <div className=" singleForum">
      <button onClick={() => navigate(`/forums/${post.topic}`)} className="SF-home-btn">Return to Topic</button>
      <button onClick={() => navigate(`/forums`)} className="SF-home-btn">Go to Forums</button>
      <SinglePost title={post.title} id={post.id} body={post.body} createdAt={post.createdAt} getSinglePost={'return'} />
      <div className="singlePostCommentIcon">
        <div onClick={goEdit} className="first-icon icon" ><FontAwesomeIcon className="singlePostIcon" icon={faPenToSquare} /></div>
        <div className="last-icon icon"><FontAwesomeIcon className="singlePostIcon" icon={faTrashCan} /></div>
      </div>
      <div className="singlePostCommentIcon singlePostCommentBox">
            <div className="first-icon icon"><FontAwesomeIcon className="singlePostIcon" icon={faComment} /></div>
            <div className="last-icon icon"><FontAwesomeIcon className="singlePostIcon" icon={faHeart} /></div>
          </div>
      <button onClick={() => navigate(`/forums/post/${post.id}`)} className="SF-home-btn">Edit Post</button>
      {/* <Sidebar /> */}

    </div>
  )
}

export default SingleForum

