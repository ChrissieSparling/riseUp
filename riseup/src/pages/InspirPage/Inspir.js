// this is joes fishy app need to adjust for inspir
// import {useEffect,useState} from 'react'
// import {useParams} from "react-router-dom"
// import "./style.css"
// import Fish from '../../components/Fish';
// import API from '../../utils/API';

// export default function TankDetail() {
//     const params = useParams();
//     const [tank, setTank] = useState({
//         name:"",
//         Fishes:[]
//     })
//     useEffect(() => {
//         API.getSinglePhilosophy(params.id)
//        .then(data=>{
//             setTank({
//                 name:data.name,
//                 Fishes:data.Fishes
//             })
//         })
//     }, [])
//     return (<div className="inspirations-container" > 
     
//     <div className="affJumbo">
//     <h1 className="affTitle">🌻  Inspiration  🌻</h1>
//     <h1 className="affWords">Let us be your MUSE! Sign up to get inspired every day by community of fellow sunflowers all trying to find light in a dark world!!</h1>
//     </div>  
//           <h1>{inspiration.name}</h1>
//       <div className="TankDetail">
//           {inspiration.Fishes.map(fishie=><Fish key={fishie.id} name={fishie.name} color={fishie.color} width={fishie.width}/>)}
//       </div>
//       <div className="seaFloor"></div>
//      </div>
//     )
// }