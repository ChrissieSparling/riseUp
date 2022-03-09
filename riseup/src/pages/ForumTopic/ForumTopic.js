import React from 'react'
import "./ForumTopic.css"
import Testing from '../../assets/images/testing.jpeg'
import Universe from '../../assets/images/universe.webp'
import {useNavigate} from 'react-router-dom'

const ForumTopicHome = () => {
  let navigate = useNavigate();
    const forumTopics = [
        {
            topic: "Family",
            image: Testing
        },
        {
            topic: "Relationshipd",
            image: Universe
        },
        {
            topic: "Personal Wellness",
            image: Universe
        },
        {
            topic: "Financial",
            image: Universe
        },
        {
            topic: "Work",
            image: Universe
        },
        {
            topic: "Crisis Recovery",
            image: Universe
        },
    ]

    const getPosts = (topic) => {
      // e.preventDefault();
      navigate(`/forums/${topic}`)
      console.log('value', topic)
    }

    return (

  <div>
    <div className="post cursor">
      <div className="postInfo">
        <div className="postCats">
        <span className="postTitle">Philosophy</span>
          <hr/>
        
          <p className="postSub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores iusto perspiciatis, minus vel veniam debitis magni praesentium, excepturi nisi sint. Ab aut numquam temporibus, facilis vitae illum quae quibusdam.lit. Quaerat, maiores iusto perspiciatis, minus vel veniam debitis magni praesentium, excepturi nisi sint. Ab aut numquam temporibus, facilis vitae illum quae quibusdam.</p>
        </div>
      </div>
    </div>
    <div className="post cursor">
      <div className="postInfo">
        <div className="postCats">
          <span className="postTitle">Healing Activities</span>
          <hr/>
          
          <p className="postSub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores iusto perspiciatis, minus vel veniam debitis magni praesentium, excepturi nisi sint. Ab aut numquam temporibus, facilis vitae illum quae quibusdam.lit. Quaerat, maiores iusto perspiciatis, minus vel veniam debitis magni praesentium, excepturi nisi sint. Ab aut numquam temporibus, facilis vitae illum quae quibusdam.</p>
        </div>
      </div>
    </div>
    <div className="post cursor">
      <div className="postInfo">
        <div className="postCats">
        <span className="postTitle">Homeopathic Therapies</span>
          <hr/>
          
          <p className="postSub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores iusto perspiciatis, minus vel veniam debitis magni praesentium, excepturi nisi sint. Ab aut numquam temporibus, facilis vitae illum quae quibusdam.lit. Quaerat, maiores iusto perspiciatis, minus vel veniam debitis magni praesentium, excepturi nisi sint. Ab aut numquam temporibus, facilis vitae illum quae quibusdam.</p>
        </div>
      </div>
    </div>
    
            </div>
    
    );
}

export default ForumTopicHome;