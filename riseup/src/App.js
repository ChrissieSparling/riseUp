
import "."
import {React, useState} from "react";
import { BrowserRouter as Routes, Route, NavLink, Switch } from "react-router-dom";
import "./App.css"
import logoImg  from './assets/images/riseup.png'
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Horoscope from "./components/Horoscope/Horoscope";
// import Login from "./components/Login/Login";
// import SignUp from "./components/SignUp/SignUp";
// import Navbar from "./components/Navbar/Navbar";
// import Forum from "./pages/Forum/Forum"
// import SingleForum from "./pages/SingleForum/SingleForum";
// import Write from "./pages/Write/Write";
import Homepage from "./pages/Homepage/Homepage";
import PublicHomepage from "./pages/PublicHomepage/PublicHomepage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <div>
        <header>
        <NavLink to="/"><img className="logoImg" src={logoImg} alt="rise up" /></NavLink>
        </header>
      </div>
      <div className="nav">
        <div className="topLeft">
          {/* <i className="fa-solid fa-magnifying-glass navSearchIcon"></i> */}
          {/* <img src="#" alt="profile" className="logoImg" /> */}
        </div>
        </div>
     
       
        {/* <Link to="/forums">Forum Home</Link> */}
        {/* <Link to="/">Logout</Link> */}
        {/* <Link to="/">Edit My Info</Link> */}
        {/* <Link to="/">Manatee</Link> */}

      
      
        {/* <Header /> */}
        {/* <Navbar /> */}
      <Horoscope />
        {/* <Homepage /> */}
        <PublicHomepage /> 
        {/* <SignUp /> */}
        {/* <Forum />
        < SingleForum />
        <Write /> */}
   
      <Switch>
        {/* <Route path=""></Route> */}
        {/* <Route path="/forum"><Forum/></Route> */}
        <Route path="/forums" children={<Homepage/>}/>
        <Route path="/" children={<PublicHomepage/>}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

