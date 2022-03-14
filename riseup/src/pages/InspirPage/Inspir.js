// this is joes fishy app need to adjust for inspir
import {useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import "./style.css"
import Fish from '../../components/Fish';
import API from '../../utils/API';

export default function TankDetail() {
    const params = useParams();
    const [tank, setTank] = useState({
        name:"",
        Fishes:[]
    })
    useEffect(() => {
        API.getSinglePhilosophy(params.id)
       .then(data=>{
            setTank({
                name:data.name,
                Fishes:data.Fishes
            })
        })
    }, [])
    return (<div className="affirmations-container" > 
     
    <div className="affJumbo">
    <h1 className="affTitle">🌻Perspective🌻</h1>
    <h1 className="affWords">Life is not what you make it. It is how you PERCIEVE it. Some people may see climbing the stairs as an easy everyday thing, but others might see it as a huge accomplishment. While geniuses might see Rocket Science as the simplest form of study, others see it as above and beyond the scope of their understanding. So think about that. Stop for a second and really think about that. Notice ALL the amazing things YOU accomplish in your day. Because at the end of it, all you have is your feelings about it. Be kind to yourself. No one and I mean NOONE likes someone who is always putting them. So right now make the commitment to no longer be one of those people to yourself. You owe it to YOU! And You probably need a hug from you too!</h1>
    </div>  
          <h1>{affirmation.name}</h1>
      <div className="TankDetail">
          {affirmation.Fishes.map(fishie=><Fish key={fishie.id} name={fishie.name} color={fishie.color} width={fishie.width}/>)}
      </div>
      <div className="seaFloor"></div>
     </div>
    )
}