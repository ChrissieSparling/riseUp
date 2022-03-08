
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
import Settings from "./pages/Settings/Settings";
import Homepage from "./pages/Homepage/Homepage";
import Affirmations from "./components/Affirmations/Affirmations";
// import ForgetPass from "./components/ForgetPassword/ForgetPass";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Affirmations/>
        <Horoscope />
        <Homepage />
        <Login />
        <SignUp />
        {/* <ForgetPass /> */}
        <Forum />
        < SingleForum />
        <Write />
        <Settings />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

