// import sunbeams from './sunbeams.svg';
// import './App.css';
import React from 'react';
import Homepage from './pages/Homepage';
import Affirmation from './pages/Affirmation';
import Crisis from './pages/Crisis';
import Motivation from './pages/Motivation';
import Philosophy from './pages/Philosophy';
import WellnessPlanner from './pages/WellnessPlanner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      
      <Router>
      <Header/>
      <Homepage></Homepage>
      <Switch>
        <Route exact path = "/home" component = {Homepage} />
        <Route exact path = "/affirmation" component = {Affirmation} />
        <Route exact path = "/crisis" component = {Crisis} />
        <Route exact path = "/motivation" component = {Motivation} />
        <Route exact path = "/philosophy" component = {Philosophy} />
        <Route exact path = "/wellnessPlanner" component = {WellnessPlanner} />
        <Route exact path = "/" component = {Homepage} />
        </Switch>


      <Footer/>
      </Router>
    </div>
  );
}

export default App;
