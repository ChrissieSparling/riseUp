
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
import About from "./pages/About/About"
import EditPost from "./pages/EditPost/EditPost";
import Crisis from "./components/Crisis/Crisis";
import TermsCond from "./pages/Terms/TermsCond";
import PrivacyPolicy from "./pages/Terms/PrivacyPolicy";
import CookiePolicy from "./pages/Terms/CookiePolicy";


function App() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    role: '',
    email: '',
    birthday: '',
    zipCode: '',
  });
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
        })
        .catch(err => {
          console.log(err);
        });
    } 
  }, []);

  const handlePostUser = (e) => {
    console.log(newUser)
    e.preventDefault();
    fetch("https://rise-up-back-end.herokuapp.com/users/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        username: newUser.username,
        password: newUser.password,
        role: newUser.role,
        email: newUser.email,
        birthday: parseInt(newUser.birthday.split('-').reverse().join('-')),
        zipCode: newUser.zipCode,
      }),
    })
      .then((data) => data.json())
      .then((newData) => {
        if(newData.id){
          console.log(newData)
          setUserId(newData.id);
          setUsername(newData.username);
          setToken(newData.accessToken);
          localStorage.setItem("token", newData.accessToken);
          navigate(`/users/${newData.id}`)
        } else {
          alert('Your request was not successful. \nPlease check the form and try again.');
          console.log('front end post req prob:', newData)
          return
        }
      })
      .catch(err=>{
        alert('Sorry! Our bad, there was a problem.');
        console.log('there was an error', err)
        return
      })
  };

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

  const handleCollectUser = e=>{
    console.log(e.target.name,e.target.value)
    setNewUser({
      ...newUser,
      [e.target.name]:e.target.value
    })
  }

  return (
    <div className="app">
      <Header />
      <Navbar id={userId} logMeOut={logMeOut}/>
      <Routes>
       
        <Route path='/signup' element={<SignUp handlePostUser={handlePostUser} handleCollectUser={handleCollectUser}/>}/>
        <Route path='/users/login' element={<Login handleInputChange={handleInputChange} loginInfo={loginInfo} handleLogin={handleLogin} />}/>
        <Route path={`/users/:id`} element={<UserHome  username={username} userId={userId}/>}/>
        <Route path='/forums'element={<ForumTopicHome />}/>
        <Route path='/forums/:topic'element={<ForumTopic/>}/>
        <Route path='/forums/post/:id'element={<SingleForum username={username} userId={userId}/>}/>
        <Route path='/forums/edit/post/:id'element={<EditPost/>}/>
        <Route path='/about'element={<About/>}/>
        {/* route for affirmation page */}
        {/* <Route path='/affirmations/:topic'element={<AffPage/>}/> */}
        <Route path='/forums/post/:topic/new'element={<NewPost/>}/>
        <Route path='/horoscope'element={<Horoscope/>}/>
        <Route path='/story'/>
        <Route path='/crisis'element={<Crisis/>}/>
        <Route path='/'element={<Homepage/>}/>

        <Route path='*'/>

      </Routes>
      <TermsCond/>
      <PrivacyPolicy/>
      <CookiePolicy/>
      <Footer />

    </div>
  );
}

export default App;

