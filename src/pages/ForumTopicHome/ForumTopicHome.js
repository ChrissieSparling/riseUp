import React, { Children } from 'react'
import "./ForumTopicHome.css"
import Sunrise from '../../assets/images/stylized_sunrise.png'
import {useNavigate} from 'react-router-dom'
import { flexbox } from '@mui/system'

const ForumTopicHome = () => {
  let navigate = useNavigate();
  
    const forumTopics = [
        {
            topic: "Family",
            image: Sunrise,
            description: 'Whether you\'re trying to relate to children, or talk to your parents about something difficult, this is the place for you.'
        },
        {
            topic: "Relationships",
            image: Sunrise,
            description: 'Relating to acquaintances, lovers, family, friends, or the environment around you is something we all do every day. Here\'s a place to seek an alternative perspective!'
        },
        {
            topic: "Personal Wellness",
            image: Sunrise,
            description: 'If you want to work on improving your practices for emotional, mental, physical, or spiritual wellness, seek like-minded peers in here.'
        },
        {
            topic: "Financial",
            image: Sunrise,
            description: 'Money can be hard to talk about it, but it\'s something we all deal with. Whether you\'re seeking ideas on how to handle your finances in general, or get out of debt, this is the forum for you!'
        },
        {
            topic: "Work",
            image: Sunrise,
            description: 'Sometimes we like our jobs, and sometimes we don\'t. Here\'s a place to seek an alternative viewpoint if you\'re fighting with your co-workers, or seek encouragement if you\'re on the hunt for a new job. Or anything in between!'
        },
        {
            topic: "Crisis Recovery and Grieving",
            image: Sunrise,
            description: 'Everyone goes through hard times in their life. The only thing we can truly control is our reaction to them. Whether what happens is something minor, or something that rocks your world, come in here if you\'re looking for help getting a foot on the path forward.'
        },
    ]

    console.log('forum topics', forumTopics)

    const getPosts = (topic) => {
      navigate(`/forums/${topic}`)
      console.log('value', topic)
    }

    return (

        <div className="FHposts">

            <h1 style={{textAlign: "center", color: "whitesmoke", fontFamily: "sansita swashed", textShadow: "1px 1px 6px grey", fontSize:"3.5rem"}} className='FT-title-box'>Welcome to the Forum!</h1>
            <div style={{width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {forumTopics.map(topic => 
                    <div className="FHpost-cursor" value={topic.topic}  style={{backgroundImage: `url(${topic.image})` }} onClick={()=>getPosts(topic.topic)}>
                        <div className="FHpostCats" value={topic.topic}>
                            <div className="FHtitle-box">
                                <span className="FHpostTitle">{topic.topic}</span>
                                
                            </div>
                            <p className="FHpostSub">{topic.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ForumTopicHome;