
import "."
import "../src/App.css"
import {React, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";

import Layout from './pages/Layout/Layout'
import AddUser from "./components/AddUser/AddUser";
import RequireAuth from './components/RequireAuth/RequireAuth'


import Unauthorized from './pages/Unauthorized/Unauthorized'
import Profile from './pages/Profile/Profile'
import Horoscope from "./components/Horoscope/Horoscope";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

import SingleForum from "./pages/SingleForum/SingleForum";

import Homepage from "./pages/Homepage/Homepage";

import ForumTopicHome from "./pages/ForumTopicHome/ForumTopicHome";
import ForumTopic from "./pages/ForumTopic/ForumTopic";
import NewPost from "./pages/NewPost/NewPost";

import About from "./pages/About/About"
import EditPost from "./pages/EditPost/EditPost";
import Crisis from "./components/Crisis/Crisis";
import Missing from './components/Missing/Missing'
import TermsCond from "./pages/Terms/TermsCond";
import PrivacyPolicy from "./pages/Terms/PrivacyPolicy";
import CookiePolicy from "./pages/Terms/CookiePolicy";
import AffPage from "./pages/AffirmationPage/AffPage";
import MotPage from "./pages/MotPages/MotPage";
import Phil from "./pages/PhilosophyPage/Phil";
import InspirPage from "./pages/InspirPage/Inspir";
import Asp from "./pages/AspirationPage/Asp";


function App() {
  // const navigate = useNavigate();
  // const {auth, setAuth} = useAuth();
 
  // const [username, setUsername] = useState("");
  // const [usernameShow, setUsernameShow] = useState('none');
  // const [passwordShow, setPasswordShow] = useState('none');
  // const [firstNameShow, setFirstNameShow] = useState('none');
  // const [lastNameShow, setLastNameShow] = useState('none');
  // const [emailShow, setEmailShow] = useState('none');
  // const [birthdayShow, setBirthdayShow] = useState('none');
  // const [zipCodeShow, setZipCodeShow] = useState('none');
  // const [newUser, setNewUser] = useState({
  //   firstName: '',
  //   lastName: '',
  //   username: '',
  //   password: '',
  //   role: 'paidUser',
  //   email: '',
  //   birthday: '',
  //   zipCode: '',
  // });
  // const [userId, setUserId] = useState(0);
  // const [token, setToken] = useState("");



  // const handlePostUser = (e) => {
  //   console.log(newUser)
  //   e.preventDefault();
  //   if(!newUser.username){
  //     setUsernameShow('inline')
  //     return
  //   }
  //   if (!newUser.firstName) {
  //     setFirstNameShow('inline')
  //     return
  //   }
  //   if (!newUser.lastName) {
  //     setLastNameShow('inline')
  //     return
  //   }
  //   if (!newUser.email) {
  //     setEmailShow('inline')
  //     return
  //   }
  //   if (!newUser.birthday) {
  //     setBirthdayShow('inline')
  //     return
  //   }
  //   if (!newUser.zipCode) {
  //     setZipCodeShow('inline')
  //     return
  //   }
  //   if (!newUser.password) {
  //     setPasswordShow('inline')
  //     return
  //   }
  //   if (newUser.username!=='' && newUser.password!=='' && newUser.firstName!=='' && newUser.lastName!=='' && newUser.email!=='' && newUser.birthday!=='' && newUser.zipCode!=='') {
  //   API.signUp(newUser)
  //     .then((newData) => {
  //       if(newData.id){
  //         console.log(newData)
  //         setUserId(newData.id);
  //         setUsername(newData.username);
  //         setToken(newData.accessToken);
  //         localStorage.setItem("token", newData.accessToken);
  //         navigate(`/login`)
  //       } else {
  //         alert('Your request was not successful. \nPlease check the form and try again.');
  //         console.log('front end post req prob:', newData)
  //         return
  //       }
  //     })
  //     .catch(err=>{
  //       alert('Sorry! Our bad, there was a problem.');
  //       console.log('there was an error', err)
  //       return
  //     })
  // };

  // const handleCollectUser = e=>{
  //   console.log(e.target.name,e.target.value)
  //   setNewUser({
  //     ...newUser,
  //     [e.target.name]:e.target.value
  //   })
  // }

  return (
    <div className="app">

      <Routes>
        <Route path='/'element={<Layout/>}>
          
          {/* public routes */}
          <Route path='/'element={<Homepage/>}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/horoscope'element={<Horoscope />}/>
          <Route path='/crisis'element={<Crisis />}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/terms'element={<TermsCond/>}/>
          <Route path='/privacy'element={<PrivacyPolicy/>}/>
          <Route path='/cookie'element={<CookiePolicy/>}/>
          <Route path={`/MotPages`} element={<MotPage />}/>
          <Route path={`/Phil`} element={<Phil />}/>
          <Route path={`/InspirPage`} element={<InspirPage />}/>
          <Route path={`/AspirationPage`} element={<Asp />}/>


          {/* protected routes */}
          <Route element={<RequireAuth allowedRoles={['paidUser', 'mod', 'admin']}/>}>
            <Route path={`/profile`} element={<Profile />}/>
            <Route path='/forums'element={<ForumTopicHome />}/>
            <Route path='/forums/:topic'element={<ForumTopic />}/>
            <Route path='/forums/post/:id'element={<SingleForum/>}/>
            <Route path='/forums/edit/post/:id'element={<EditPost />}/>
            
            <Route path='/forums/post/:topic/new'element={<NewPost />}/>
          </Route>

          <Route element={<RequireAuth allowedRoles={['mod']}/>}>
          </Route>
          <Route element={<RequireAuth allowedRoles={['admin']}/>}>
            <Route path='/adduser' element={<AddUser/>}/>
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

