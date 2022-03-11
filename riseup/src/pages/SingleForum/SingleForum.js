import { React, useState, useEffect } from 'react'
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
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState({})
  const [wantComment, setWantComment] = useState(false)

  useEffect(() => {
    console.log('incoming user Id', props.userId)
    setCurrUser({
      id: props.userId,
      username: props.username
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
          id: responseJson.id,
          userId: responseJson.userId,
          topic: responseJson.topic,
          title: responseJson.title,
          body: responseJson.body,
          author: responseJson.user.username,
          createdAt: responseJson.createdAt
        })
        setComments(responseJson.Comments)
      }).catch(err => {
        console.log(err)
        alert(`There was an error: ${err}`)
      })

  }, []);

  const postComment = e => {
    e.preventDefault();
    console.log('this is the new post', newComment, currUser.username)
    fetch(`http://localhost:3005/posts/${id}/comments/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({
        body: newComment.body,
        author: currUser.username
      }),
    })
      .then((data) => data.json())
      .then((newData) => {
        comments.push(newData)
        console.log(newData)
        document.querySelector('form').reset();
        setWantComment(false);
        navigate(`/forums/post/${id}`)
      }).catch((err) => {
        console.log('There was a problem: ', err)
        alert({ message: 'there was an error: ', err })
      })
  }

  const handleWantComment = e => {
    e.preventDefault();
    if (wantComment) {
      setWantComment(false);
    } else { setWantComment(true) }
  }

  const handleComment = e => {
    e.preventDefault();
    console.log('you\'re typing', e.target.name, e.target.value)
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value
    })
  }

  const getComment = (id, e) => {
    e.preventDefault()
    setWantComment(true)
    const clickedComment = comments.filter(comment=> {return comment.id===id})
    console.log(clickedComment[0].body)
    document.getElementById('comment-input').textContent = clickedComment[0].body
    comments.forEach((comment)=>{
      console.log('is this the clicked comment?', comment.id===id)
      console.log(comment.id)
      console.log(id)
    })
    console.log(comments)
    console.log(clickedComment)
  }

  const editComment = e => {

  }

  const deleteComment = e => {

  }

  const goEdit = e => {
    e.preventDefault();
    console.log(post.id)
    navigate(`/forums/edit/post/${post.id}`)
  }

  const deletePost = e => {
    e.preventDefault();
    if (window.confirm('This will remove your post from the forum, do you want to proceed?')) {

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
  console.log('is this your post?', currUser.id === post.userId)
  comments.forEach(c=>{console.log('is this your comment?',currUser.username === c.author)});

  return (
    <div className=" singleForum">
      <button onClick={() => navigate(`/forums/${post.topic}`)} className="SF-home-btn">Return to Topic</button>
      <button onClick={() => navigate(`/forums`)} className="SF-home-btn">Go to Forums</button>
      <SinglePost title={post.title} author={post.author} id={post.id} body={post.body} createdAt={post.createdAt} getSinglePost={'return'} />

      <div className="SF-comment-box">

        {currUser.id === post.userId ? (<div className="singlePostCommentIcon">
          <div onClick={goEdit} className="first-icon icon" ><FontAwesomeIcon className="singlePostIcon" icon={faPenToSquare} /></div>
          <div onClick={deletePost} className="last-icon icon"><FontAwesomeIcon className="singlePostIcon" icon={faTrashCan} /></div>
        </div>) :
          <div className="singlePostCommentIcon singlePostCommentBox">
            <div onClick={handleWantComment} className="first-icon icon"><FontAwesomeIcon className="singlePostIcon" icon={faComment} /><p>Comment</p></div>
            <div className="last-icon icon"><FontAwesomeIcon className="singlePostIcon" icon={faHeart} /><p>Like</p></div>
          </div>}

        {wantComment ?
          <form className="SF-comment-btn-box">
            <textarea id="comment-input" name="body" onChange={handleComment} className="SF-comment-input" rows="3" placeholder="Leave a comment..."></textarea>
            <button onClick={postComment} className="SF-home-btn">Comment</button>
          </form> : null}

        {comments.length ? (comments.map(p => {
          return (
            <div className="whole-comment">
              <div className="posted-comment" key={p.id}>
                <li className="posted-comment-body">{p.body}</li>
                <li>Created on: {p.createdAt} By: {p.author}</li>
              </div>
              <div className="singlePostCommentIcon singlePostCommentBox comment-btn-box">
                <div onClick={handleWantComment} className="first-icon icon comment-icon" data-index={p.id}><FontAwesomeIcon  className="singlePostIcon"  icon={faComment} /></div>
                <div className="last-icon icon comment-icon" data-index={p.id}><FontAwesomeIcon className="singlePostIcon" icon={faHeart} /></div>
              </div>
        
          {currUser.id === p.userId ? 
              (<div className="singlePostCommentIcon singlePostCommentBox comment-btn-box">
                <div onClick={(e)=>getComment(p.id, e)} className="first-icon icon" data-index={p.id}><FontAwesomeIcon className="singlePostIcon" icon={faPenToSquare} /></div>
                <div onClick={deleteComment} className="last-icon icon" data-index={p.id}><FontAwesomeIcon className="singlePostIcon" icon={faTrashCan} /></div>
              </div>) : null}

            </div>
            // <li className='list-group-item' style={{width: "40vw"}} key={p.id}><h1>{p.title}</h1><p>{p.topic}</p><p>{p.body}</p><p>User: {p.userId}</p></li>
          )
        })) : <h1 className="nothing-to-show">No comments to display!</h1>}


      </div>
    </div>
  )
}

export default SingleForum

