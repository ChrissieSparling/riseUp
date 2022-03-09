import React from 'react'
import "../../pages/Homepage/homepage.css"
import Testing from '../../assets/images/testing.jpeg'

const HomePage = () => {

  const forumTopics = [
  {
    topic:"Testing",
    image: Testing
  },
  {
    topic:"Motivation",
    image: ""
  },
  {
    topic:"Philosophy",
    image: ""
  },
  {
    topic:"Healing Activities",
    image: ""
  },
  {
    topic:"Homeopathic Therapies",
    image: ""
  },
]


  return (
<div className="posts ">
  {forumTopics.map(topic=>{
    <div className="post cursor">
        <div className="postCats"style={{height: "100%", width: "100%",backgroundImage: `url(${topic.image})`}}>
          <div className="title-box">
          <span className="postTitle">{topic.topic}</span>
          </div>
      </div>
    </div>
    })}
    {/* <div className="post cursor">
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
     */}
    </div>
  )
}

export default HomePage
