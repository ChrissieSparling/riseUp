import React from "react";
import "./NewPost.css";
import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Write = () => {
  let navigate = useNavigate();
  let {topic} = useParams();
  const [newPost, setNewPost] = useState({
    topic: topic,
    body: ''

  })


  const handleInputChange = e =>{
    e.preventDefault();
    console.log ('you\'re typing', e.target.name,e.target.value)
    setNewPost({
      ...newPost,
      [e.target.name]:e.target.value
    })
  }

  const showObject = e => {
    e.preventDefault();
    console.log('this is the new post', newPost)
    fetch('http://localhost:3005/posts/new',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({
          topic: newPost.topic,
          title: newPost.title,
          body: newPost.body
       }),
    })
    .then((data) => data.json())
    .then((newData) => {
      console.log(newData)
      navigate(`/forums/${topic}`)
    }).catch((err) => {
      console.log('There was a problem: ', err)
      alert({message: 'there was an error: ', err})
    })
  }

  return (
    <div className="write">
      <h1>What's on your mind?</h1>
      <p>Let your fellow users know what you'd like a different perspective on. Please keep in mind that this is a place for positivity. Make sure what you post in the forums isn't intended to hurt anyone else.</p>
      <form className="writeForm" >
           {/* img future dev */}
        {/* <div className="writeFormGroup">
           
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          /> 
        </div> */}
        <div className="writFormGroup">
          <input className="writeInput writeText NPtitle" name={'title'} onChange={handleInputChange} type="text" placeholder="Give it a title..."></input>
          <textarea name={'body'} placeholder="Tell your story..." type="text" onChange={handleInputChange} className="writeInput writeText"></textarea>
        </div>
        <button onClick={showObject} className="writeSubmit">Publish</button>

      </form>
    </div>
  );
};

export default Write;
