// import sunbeams from './sunbeams.svg';
import "."



// import "./css/affirmations.css"
import React from "react";
import Homepage from "./pages/Homepage";
import Affirmation from "./pages/Affirmation";
import Crisis from "./pages/Crisis";
import Motivation from "./pages/Motivation";
import Philosophy from "./pages/Philosophy";
import WellnessPlanner from "./pages/WellnessPlanner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Horoscope from "./components/Horoscope/Horoscope";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Affirmations from "./components/Affirmations";
import Mvp from "./pages/Mvp"
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Affirmation />
        <Horoscope />
        <div style={{display: "flex"}}>
        <Login />
        <SignUp />
        </div>
        <Mvp />
        < SinglePost />
        <Homepage></Homepage>
        <Switch>
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/affirmation" component={Affirmation} />
          <Route exact path="/crisis" component={Crisis} />
          <Route exact path="/motivation" component={Motivation} />
          <Route exact path="/philosophy" component={Philosophy} />
          <Route exact path="/wellnessPlanner" component={WellnessPlanner} />
          <Route exact path="/" component={Homepage} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

