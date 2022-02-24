import React from 'react';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import  {NavLink} from 'react-router-dom';

const Homepage = () =>{
    return (
        <div>
           
           <Content></Content>
           <ul>
               <li>
               <NavLink className="nav"
                   activeClassName="active"
                   isActive={()=>window.location.pathname==="/affirmation"} 
                   to="/affirmation">Affirmations</NavLink>
                </li>
               <li>
                   <NavLink className="crisis"
                   activeClassName="active"
                   isActive = {()=> window.location.pathname === "/crisis"} 
                   to = "/crisis">Crisis</NavLink>
               </li>
               <li>
                   <NavLink className="motivation"
                   activeClassName="active"
                   isActive = {()=> window.location.pathname === "/motivation"} 
                   to = "/motivation">Motivation</NavLink>
               </li>
               <li>
                   <NavLink className="philosophy"
                   activeClassName="active"
                   isActive = {()=> window.location.pathname === "/philosophy"} 
                   to = "/philosophy">Philosophy</NavLink>
               </li>
               <li>
                   <NavLink className="wellnessPlanner"
                   activeClassName="active"
                   isActive = {()=> window.location.pathname === "/wellnessPlanner"} 
                   to = "/wellnessPlanner">WellnessPlanner</NavLink>
               </li>
           </ul>
        </div>
    )
} 
export default Homepage;