import React from "react";
import "./NewPost.css";
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NewPostBox from '../../components/NewPostBox/NewPostBox'
import API from "../../utils/API";

const Write = () => {
  let navigate = useNavigate();
  let { topic } = useParams();
  const [newPost, setNewPost] = useState({
    topic: topic,
    title: '',
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

  const savePost = e => {
    e.preventDefault();
    if(newPost.title===''){
      alert('You need to give your post a title!')
      return
    }
    if(newPost.body===''){
      alert('You need to add a message to your post!')
      return
    }
    if(newPost.title!=='' && newPost.body!==''){
    console.log('this is the new post', newPost)
    API.savePost(newPost)
      .then((newData) => {
        console.log(newData)
        navigate(`/forums/${topic}`)
      }).catch((err) => {
        console.log('There was a problem: ', err)
        alert({ message: 'there was an error: ', err })
      })
    }
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
   
      <NewPostBox handleInputChange={handleInputChange}/>
      <button onClick={savePost} className='SF-home-btn TF'>Publish</button>
      </div>
    </>
  );
};

export default Write;
