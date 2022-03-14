
import "."
import "../src/App.css"
import {React, useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import API from "./utils/API"
import Layout from './pages/Layout/Layout'
import RequireAuth from './components/RequireAuth/RequireAuth'
import useAuth from './utils/hooks/useAuth'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Unauthorized from './pages/Unauthorized/Unauthorized'
import Profile from './pages/Profile/Profile'
import Horoscope from "./components/Horoscope/Horoscope";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
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
import Missing from './components/Missing/Missing'
import TermsCond from "./pages/Terms/TermsCond";
import PrivacyPolicy from "./pages/Terms/PrivacyPolicy";
import CookiePolicy from "./pages/Terms/CookiePolicy";
import AffPage from "./pages/AffirmationPage/AffPage"


function App() {
  const navigate = useNavigate();
  const {auth, setAuth} = useAuth();
  const [username, setUsername] = useState("");
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

  const handlePostUser = (e) => {
    console.log(newUser)
    e.preventDefault();
    API.signUp(newUser)
      .then((newData) => {
        if(newData.id){
          console.log(newData)
          setUserId(newData.id);
          setUsername(newData.username);
          setToken(newData.accessToken);
          localStorage.setItem("token", newData.accessToken);
          navigate(`/users/profile`)
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

  const handleCollectUser = e=>{
    console.log(e.target.name,e.target.value)
    setNewUser({
      ...newUser,
      [e.target.name]:e.target.value
    })
  }

  return (
    <div className="app">

      <Routes>
        <Route path='/'element={<Layout/>}>
          
          {/* public routes */}
          <Route path='/'element={<Homepage/>}/>
          <Route path='/signup' element={<SignUp handlePostUser={handlePostUser} handleCollectUser={handleCollectUser}  userId={userId}/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/horoscope'element={<Horoscope userId={userId}/>}/>
          <Route path='/crisis'element={<Crisis userId={userId}/>}/>
          <Route path='/about'element={<About/>}/>


          {/* protected routes */}
          <Route element={<RequireAuth allowedRoles={['paidUser', 'mod', 'admin']}/>}>
            <Route path={`/profile`} element={<Profile />}/>
            <Route path='/forums'element={<ForumTopicHome userId={userId} />}/>
            <Route path='/forums/:topic'element={<ForumTopic userId={userId}/>}/>
            <Route path='/forums/post/:id'element={<SingleForum username={username} userId={userId}/>}/>
            <Route path='/forums/edit/post/:id'element={<EditPost userId={userId}/>}/>
            
            <Route path='/forums/post/:topic/new'element={<NewPost userId={userId}/>}/>
          </Route>

          <Route element={<RequireAuth allowedRoles={['mod']}/>}>
          </Route>
          <Route element={<RequireAuth allowedRoles={['admin']}/>}>
          </Route>
          
          {/* error route */}
          <Route path='/unauthorized' element={<Unauthorized/>}/>
          <Route path='*' element={<Missing/>}/>
        </Route>

      </Routes>

    </div>
  );
}

export default App;

