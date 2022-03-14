// this is joes fishy app need to adjust for inspir

import {useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import "./style.css"
import Fish from '../../components/Fish';
import API from '../../utils/API';

export default function Motivation() {
    const params = useParams();
    const [Motivation, setMotivation] = useState({
        name:"",
        motivation:[]
    })
    useEffect(() => {
        API.getSingleMotivation(params.id)
       .then(data=>{
            setMotivation({
                name:author.name,
                Motivations:data.Motivgations
            })
        })
    }, [])
    return (
    
        <div className="motivation-container" > 
     
        <div className="motJumbo">
        <h1 className="motTitle">🌻 {username} , today let's SAY YES 🌻</h1>
        <h1 className="motWords">The words Do not feel like it need a vaction!  So let us Feel Like Doing It today! One foot in front of the other. No matter what you are up against GET moving. Sometimes all it takes to feel a little happier, or a little healthier, is getting active. Today's challenge. Be a Yes Man. Try saying yes instead of NO to things you would normally deny.No ridiculous stuff. But small things. If you do not want to call your mom for some reason. Call her. If you get asked to go to a friends house-Go. The world blossoms for us sunflowers when we step into the sun. Try it- Say yes to at least one thing out of the ordinary today and break the cycle of redundancy. You can do it!! We believe in you!</h1>
        </div>  
            <h2>Your Daily Dose of Dopamine:</h2>
            <p style={{fontWeight: 'bold', fontSize:'2rem'}}>{userMot}</p>
            <p>{userMotAuth}</p>
            <div className="MotivationDetails">
            {motivation.map(motivation=><Motivation key={motivation.id} authorName={motivation.authorName} images = {motivation.images} topic={motivation.topic}/>)}
        </div>
    </div>
            
    )
}