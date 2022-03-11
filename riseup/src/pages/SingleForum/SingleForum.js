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

const SingleForum = (props) => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [currUser, setCurrUser] = useState({})
  const [post, setPost] = useState({})
  // let navigate = useNavigate();

  useEffect(() => {
    console.log('incoming user Id',props.userId)
    setCurrUser({
      id: props.userId
    })
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
        setPost({
          id:responseJson.id,
          userId: responseJson.userId,
          topic: responseJson.topic,
          title: responseJson.title,
          body: responseJson.body,
          author: responseJson.user.username,
          createdAt: responseJson.createdAt
          })
          console.log('currUser', currUser.id)
        
          console.log('is this your post?', currUser.id===post.userId)
          console.log('is this your post? left', parseInt(currUser.id)===post.userId)
          console.log('is this your post? right', currUser.id===parseInt(post.userId))
      }).catch(err => {
        console.log(err)
        alert(`There was an error: ${err}`)
      })

  }, []);
  console.log('post', post.userId)

  const goEdit = e => {
    e.preventDefault();
    console.log(post.id)
    navigate(`/forums/edit/post/${post.id}`)
  }

  const deletePost = e => {
    e.preventDefault();
    if(window.confirm('This will remove your post from the forum, do you want to proceed?')){

      console.log(post.id);
      fetch(`http://localhost:3005/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      })
        .then(response => response.json())
        .then(responseJson => {

          console.log('=================postData', responseJson)
          navigate(`/forums/${post.topic}`)
        }).catch(err => {
          console.log(err)
          alert(`There was an error: ${err}`)
        })
    } else { return }
  }
  console.log('is this your post?', currUser.id===post.userId)
  return (
    <div className=" singleForum">
      <button onClick={() => navigate(`/forums/${post.topic}`)} className="SF-home-btn">Return to Topic</button>
      <button onClick={() => navigate(`/forums`)} className="SF-home-btn">Go to Forums</button>
      <SinglePost title={post.title} author={post.author} id={post.id} body={post.body} createdAt={post.createdAt} getSinglePost={'return'} />
     {currUser.id===post.userId ? (<div className="singlePostCommentIcon">
        <div onClick={goEdit} className="first-icon icon" ><FontAwesomeIcon className="singlePostIcon" icon={faPenToSquare} /></div>
        <div onClick={deletePost} className="last-icon icon"><FontAwesomeIcon className="singlePostIcon" icon={faTrashCan} /></div>
      </div>) :
      <div className="singlePostCommentIcon singlePostCommentBox">
        <div className="first-icon icon"><FontAwesomeIcon className="singlePostIcon" icon={faComment} /></div>
        <div className="last-icon icon"><FontAwesomeIcon className="singlePostIcon" icon={faHeart} /></div>
      </div> }
      {/* <Sidebar /> */}
    </div>
  )
}

export default SingleForum

