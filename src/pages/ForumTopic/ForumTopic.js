import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import SinglePost from '../../components/SinglePost/SinglePost'
import API from '../../utils/API'
import './ForumTopic.css'


const ForumHome = (props) => {
    let {topic} = useParams();
    const [posts, setPosts] = useState([])
    const [savedUserID, setSavedUserID] = useState('')
    let navigate = useNavigate();

    const getSinglePost = (id) => {
      navigate(`/forums/post/${id}`)
      console.log('id', id)
    }
    console.log(topic)
    useEffect(()=>{
        setSavedUserID(props.userId)
        console.log(topic)
        API.getTopicPosts(topic)
        .then(responseJson => {
        console.log('=================postData', responseJson)
          setPosts(responseJson)
        }).catch(err=>{
            console.log(err)
            alert(`There was an error: ${err}`)
        })
      }, []);
      console.log(posts)

    return (
        <div className="FT-big-box">
            <div className='FT-title-box'>
               {topic!=="undefined" ? <h1>{topic} Forum Page</h1> : null}
               <p>Tell your community what's on your mind, or click a post to see and add comments / advice to it!</p>
               <div>
                <button onClick={()=> navigate(`/forums/post/${topic}/new`)} className='SF-home-btn TF'>Make New Post</button>
                <button onClick={()=> navigate(`/forums`)} className='SF-home-btn TF'>Forums Homepage</button>
                </div>
            </div>
            <div className="FT-post-box">
            {posts.length ? (posts.map(p=>{
                return(
                <SinglePost 
                author={p.user.username} 
                getSinglePost={()=>getSinglePost(p.id)} 
                id={p.id} 
                title={p.title} 
                body={p.body} 
                createdAt={p.createdAt}
                comments={p.Comment}/>
                )
            })) : <h1 className="nothing-to-show">No posts to display!</h1>}
            </div>
        </div>
    )
}

export default ForumHome;