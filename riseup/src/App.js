
import "."
import "../src/App.css"
import {React, useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import API from "./utils/API"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Horoscope from "./components/Horoscope/Horoscope";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Forum from "./pages/Forum/Forum"
import SingleForum from "./pages/SingleForum/SingleForum";
import Write from "./pages/NewPost/NewPost";
import Homepage from "./pages/Homepage/Homepage";
import Affirmations from "./components/Affirmations/Affirmations"
import Settings from "./pages/Settings/Settings"
import UserHome from "./pages/UserHome/UserHome";
import ForumTopicHome from "./pages/ForumTopicHome/ForumTopicHome";
import ForumTopic from "./pages/ForumTopic/ForumTopic";
import NewPost from "./pages/NewPost/NewPost";
import SinglePost from "./components/SinglePost/SinglePost";
import Test from './components/SignUp/test'
import EditPost from "./pages/EditPost/EditPost";

function App() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(0);
  const [token, setToken] = useState("");
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: ''
  })

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.getTokenData(token)
        .then(data => {
          console.log(data);
          setUserId(data.id);
          setUsername(data.username);
          setToken(token);
          // navigate(`/users/${userId}`)
        })
        .catch(err => {
          console.log(err);
        });
    } 
    // else {navigate('/users/login')}
  }, []);

  async function handleLogin (e){
    e.preventDefault()
  console.log('login info', loginInfo)
    API.login(loginInfo.username,loginInfo.password)
      .then(data => {
        console.log(data);
        if(data.accessToken){
          setUserId(data.id);
          setUsername(data.username);
          setToken(data.accessToken);
          localStorage.setItem("token", data.accessToken);
          navigate(`/users/${data.id}`)
          console.log('the button was clicked')
          console.log('==========uname', loginInfo.username)
          console.log('==========password', loginInfo.password)
        } else {alert('Your username or password was incorrect!')}
      }).catch(err=>{
        console.log(err);
      });
  };

  const logMeOut = ()=>{
    localStorage.removeItem("token");
    setUserId(0);
    setUsername("");
    setToken("");
    console.log('you\'re logged out!')
    navigate('/')
  }

  const handleInputChange = e=>{
    console.log(e.target.name,e.target.value)
    setLoginInfo({
      ...loginInfo,
      [e.target.name]:e.target.value
    })
  }

  return (
    <div className="app">
      <Header />
      <Navbar logMeOut={logMeOut}/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/users/login' element={<Login handleInputChange={handleInputChange} loginInfo={loginInfo} handleLogin={handleLogin} />}/>
        <Route path='/users/:id' element={<UserHome  username={username} userId={userId}/>}/>
        <Route path='/forums'element={<ForumTopicHome />}/>
        <Route path='/forums/:topic'element={<ForumTopic/>}/>
        <Route path='/forums/post/:id'element={<SingleForum userId={userId}/>}/>
        <Route path='/forums/edit/post/:id'element={<EditPost/>}/>
        
        <Route path='/forums/post/:topic/new'element={<NewPost/>}/>
        <Route path='/horoscope'element={<Horoscope/>}/>
        <Route path='/story'/>
        <Route path='*'/>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;

