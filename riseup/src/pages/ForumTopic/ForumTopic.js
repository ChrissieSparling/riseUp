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
                <h1>{topic} Forum Page</h1>
                <button onClick={()=> navigate('/forums/post/new')}>Make New Post</button>
            </div>
            <div className="FT-post-box">
            {posts.length ? (posts.map(p=>{
                return(
                <SinglePost getSinglePost={getSinglePost} id={p.id} title={p.title} body={p.body} createdAt={p.createdAt}/>
                // <li className='list-group-item' style={{width: "40vw"}} key={p.id}><h1>{p.title}</h1><p>{p.topic}</p><p>{p.body}</p><p>User: {p.userId}</p></li>
                )
            })) : <li>No posts to display!</li>}
            </div>
        </div>
    )
}

export default ForumHome;