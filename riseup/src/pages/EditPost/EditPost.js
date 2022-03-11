import './EditPost.css'
import NewPostBox from '../../components/NewPostBox/NewPostBox'
import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

const EditPost = props => {
    let navigate = useNavigate();
    let {id} = useParams();
    const [postToEdit, setPostToEdit] = useState({})
    const [editedPost, setEditedPost] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:3005/posts/${id}`,{
            method: 'GET',
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })
        .then(response => response.json())
        .then(responseJson => {
    
        console.log('=================postData', responseJson)
          setPostToEdit(responseJson)
        }).catch(err=>{
            console.log(err)
            alert(`There was an error: ${err}`)
        })
    }, [])
  
    const handleInputEdit = e =>{
      e.preventDefault();
      console.log ('you\'re typing', e.target.name,e.target.value)
      setEditedPost({
        ...editedPost,
        [e.target.name]:e.target.value
      })
    }
  
    const showObject = e => {
      e.preventDefault();
      console.log('this is the new post', editedPost)
      fetch(`http://localhost:3005/posts/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({
            // topic: editedPost.topic,
            title: editedPost.title,
            body: editedPost.body
         }),
      })
      .then((data) => data.json())
      .then((newData) => {
        console.log(newData)
        navigate(`/forums/post/${id}`)
      }).catch((err) => {
        console.log('There was a problem: ', err)
        alert({message: 'there was an error: ', err})
      })
    }

    return (
        <>
            <div className="write">
                <div>
                    <button>Return to Single Post</button>
                    <button>Return to Topic Page</button>
                </div>
                <h1>Edit Your Post</h1>
                <p>Fix what you want fixed below, then hit the button! Remember, keep it respectful of others! This is a place for seeking positive growth and change.</p>
                <NewPostBox handleInputChange={handleInputEdit} titleContent={postToEdit.title} boxContent={postToEdit.body}/>
       
            <button onClick={showObject} className="writeSubmit">Edit</button>
            </div>
        </>
    )
}

export default EditPost