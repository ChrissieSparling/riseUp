import {React, useState, useEffect} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import "../SingleForum/singleForum.css"
import SinglePost from '../../components/SinglePost/SinglePost'
import {useParams, useNavigate, Link} from 'react-router-dom'

const SingleForum = () => {
  let {id} = useParams();
  const [post, setPost] = useState({})
  // let navigate = useNavigate();

  useEffect(()=>{
    console.log(id)
    fetch(`http://localhost:3005/posts/${id}`,{
        method: 'GET',
        headers: {
            'x-access-token': localStorage.getItem('token'),
        },
    })
    .then(response => response.json())
    .then(responseJson => {
    console.log('=================postData', responseJson)
      setPost(responseJson)
    }).catch(err=>{
        console.log(err)
        alert(`There was an error: ${err}`)
    })
  }, []);
    
  return (
    <div className=" singleForum">
      <button className="SF-home-btn"><Link to={`/forums/${post.topic}`}>Return to Topic</Link></button>
      <SinglePost title={post.title} id={post.id} username={post.user.username}body={post.body} createdAt={post.createdAt} getSinglePost={'return'}/>
      {/* <Sidebar /> */}
    </div>
  )
}

export default SingleForum

