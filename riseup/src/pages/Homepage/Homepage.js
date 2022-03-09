import React from 'react'
import "./homepage.css"
import happyImg from "../../assets/images/happyFlower.webp";
import {useState} from 'react'
import SignUp from '../../components/SignUp/SignUp'
import Login from '../../components/Login/Login'
import Affirmations from '../../components/Affirmations/Affirmations'



const HomePage = (props) => {
  const [newUser, setNewUser] = useState(false)

  const handleNewUser = e => {
    e.preventDefault();
    if(e.target.id==='login'){
        setNewUser(false);
    } else {setNewUser(true);}
}

  return (
    
        <div>
            <Affirmations />
         
        

  <div className="postsHome">

    <div className="postHome cursor">
      <div className="postInfoHome">
        <div className="postCats">
          <img className="flowerImg" src={happyImg} />
        <span className="postTitleHome">Motivations</span>
          <hr/>
        
          <p className="postSubHome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores iusto perspiciatis, minus vel veniam debitis magni praesentium, excepturi nisi sint. Ab aut numquam temporibus, facilis vitae illum quae quibusdam.lit. Quaerat, maiores iusto perspiciatis, minus vel veniam debitis magni praesentium, excepturi nisi sint. Ab aut numquam temporibus, facilis vitae illum quae quibusdam.</p>
        </div>
      </div>
   
    <div className="postHome cursor">
      <div className="postInfoHome">
        <div className="postCatsHome">
        <img className="flowerImg" src={happyImg} />
        <span className="postTitleHome">Philosophy</span>
          <hr/>
        
          <p className="postSubHome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores iusto perspiciatis, minus vel veniam debitis magni praesentium, excepturi nisi sint. Ab aut numquam temporibus, facilis vitae illum quae quibusdam.lit. Quaerat, maiores iusto perspiciatis, minus vel veniam debitis magni praesentium, excepturi nisi sint. Ab aut numquam temporibus, facilis vitae illum quae quibusdam.</p>
        </div>
      </div>
    </div>
    <div className="postHome cursor">
      <div className="postInfoHome">
        <div className="postCats">
        <img className="flowerImg" src={happyImg} />
          <span className="postTitleHome">Inspirations</span>
          <hr/>
          
          <p className="postSubHome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores iusto perspiciatis, minus vel veniam debitis magni praesentium, excepturi nisi sint. Ab aut numquam temporibus, facilis vitae illum quae quibusdam.lit. Quaerat, maiores iusto perspiciatis, minus vel veniam debitis magni praesentium, excepturi nisi sint. Ab aut numquam temporibus, facilis vitae illum quae quibusdam.</p>
        </div>
      </div>
    </div>
    <div className="postHome cursor">
      <div className="postInfoHome">
        <div className="postCats">
        <img className="flowerImg" src={happyImg} />
        <span className="postTitleHome">Aspirations</span>
          <hr/>
          
          <p className="postSubHome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maiores iusto perspiciatis, minus vel veniam debitis magni praesentium, excepturi nisi sint. Ab aut numquam temporibus, facilis vitae illum quae quibusdam.lit. Quaerat, maiores iusto perspiciatis, minus vel veniam debitis magni praesentium, excepturi nisi sint. Ab aut numquam temporibus, facilis vitae illum quae quibusdam.</p>
        </div>
      </div>
    </div> 
     
  </div>


  </div>

  <div>
            
            {!newUser ? <Login handleNewUser={handleNewUser} handleLogin={props.handleLogin} loginInfo={props.loginInfo} handleInputChange={props.handleInputChange}/> :
            <SignUp handleNewUser={handleNewUser}/>}
            </div>
</div>

  )
}

export default HomePage;
