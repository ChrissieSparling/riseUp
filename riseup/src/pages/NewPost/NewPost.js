import React from "react";
import "./NewPost.css";
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NewPostBox from '../../components/NewPostBox/NewPostBox'

const Write = () => {
  let navigate = useNavigate();
  let { topic } = useParams();
  const [newPost, setNewPost] = useState({
    topic: topic,
    body: ''

  })


  const handleInputChange = e => {
    e.preventDefault();
    console.log('you\'re typing', e.target.name, e.target.value)
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value
    })
  }

  const showObject = e => {
    e.preventDefault();
    console.log('this is the new post', newPost)
    fetch('https://rise-up-back-end.herokuapp.com/posts/new', {
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
        alert({ message: 'there was an error: ', err })
      })
  }

  return (
    <>

      <div className="write">
        <div>
          <button onClick={()=>navigate(`/forums/${topic}`)} className='SF-home-btn TF'>Return to Topic Page</button>
          <button onClick={()=> navigate(`/forums`)} className='SF-home-btn TF'>Forums Homepage</button>
        </div>
        <h1>What's on your mind?</h1>
        <p>Let your fellow users know what you'd like a different perspective on. Please keep in mind, you don't need to <em>feel</em> positive to post here, but this is a place for people <em>seeking</em> peace and positivity. Make sure what you post in the forums isn't intended to hurt anyone else.</p>
        <br/>
        <p>You are posting in {topic}.</p>
   
      <NewPostBox handleInputChange={handleInputChange} showObject={showObject} />
      <button onClick={showObject} className='SF-home-btn TF'>Publish</button>
      </div>
    </>
  );
};

export default Write;
