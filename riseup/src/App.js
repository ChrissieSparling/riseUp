
import "."
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Horoscope from "./components/Horoscope/Horoscope";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Forum from "./pages/Forum/Forum"
import SingleForum from "./pages/SingleForum/SingleForum";
import Write from "./pages/Write/Write";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Horoscope />
        <Login />
        <SignUp />
        <Forum />
        < SingleForum />
        <Write />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

