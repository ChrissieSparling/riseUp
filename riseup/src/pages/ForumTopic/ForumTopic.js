import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import SinglePost from '../../components/SinglePost/SinglePost'
import './ForumTopic.css'


const ForumHome = () => {
    let {topic} = useParams();
    const [posts, setPosts] = useState([])
    let navigate = useNavigate();

    const getSinglePost = (id) => {
      // e.preventDefault();
      navigate(`/forums/post/${id}`)
      console.log('id', id)
    }
    console.log(topic)
    useEffect(()=>{
        console.log(topic)
        fetch(`http://localhost:3005/posts/forum/${topic}`,{
            method: 'GET',
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })
        .then(response => response.json())
        .then(responseJson => {
        console.log('=================postData', responseJson)
          setPosts(responseJson)
        }).catch(err=>{
            console.log(err)
            alert(`There was an error: ${err}`)
        })
      }, []);

    return (
        <div className="FT-big-box">
            <div className='FT-title-box'>
               {topic!=="undefined" ? <h1>{topic} Forum Page</h1> : null}
               <div>
                <button onClick={()=> navigate(`/forums/post/${topic}/new`)}>Make New Post</button>
                <button onClick={()=> navigate(`/forums`)}>Go to Forums Homepage</button>
                </div>
            </div>
            <div className="FT-post-box">
            {posts.length ? (posts.map(p=>{
                return(
                <SinglePost author={p.user.username} getSinglePost={()=>getSinglePost(p.id)} id={p.id} title={p.title} body={p.body} createdAt={p.createdAt}/>
                // <li className='list-group-item' style={{width: "40vw"}} key={p.id}><h1>{p.title}</h1><p>{p.topic}</p><p>{p.body}</p><p>User: {p.userId}</p></li>
                )
            })) : <h1 className="nothing-to-show">No posts to display!</h1>}
            </div>
        </div>
    )
}

export default ForumHome;