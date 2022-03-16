import React from "react";
import '../Settings/settings.css';
// import '../css/login.css';

// import logoImg from '../images/20210930_101003.jpg'
// import ReactDOM from "react-dom";

function Settings() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="img">
            <div className="container-image">
              {/* <img src={logoImg} alt="profile" className="logo-img" /> */}
            </div>
          </div>
          <div>
            <h1>Update Your Information</h1>
            <div className="updateInput">
              <input
                type="text"
                placeholder="user name"
                className="inputUpdate"
              />
            </div>
            <div className="updateInput">
              <input type="text" placeholder="email" className="inputUpdate" />
            </div>
            <div className="updateInput">
              <input type="text" placeholder="password" className="inputUpdate" />
            </div>
            <div className="login-btn">
              <button className="updateBtn">Update</button>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;

// import React from "react";
// import "../Settings/settings.css";


// const Settings = () => {
//   return (
//     <div className="settings">
//       <div className="settingsWrapper">
//         <div className="sttingsTitle">
//           <span className="settingsUpdateTitle">Update Your Account</span>
//           <span className="settingsDeleteTitle">Delete Account</span>
//         </div>
//         {/* img future dev */}
//         <div className="updateForm">
//         <form className="settingsForm">
//             {/* <label>Profile Picture</label>
//             <div className='settingsPP'>
//             <img src="#" alt="" />
//             <label>profile pic</label>
//             <input type="file" id="finleInput" />
//             </div> */}
//              <label>Username</label>
//           <input type="text" placeholder="Username"/>
//           <label>Email</label>
//           <input type="text" placeholder="Email"/>
//           <label>Password</label>
//           <input type="text" placeholder="Password"/>
//           <button className="settingsSubmit">Update</button>
//           </form>  
//           </div>    
//       </div>
//     </div>
//   );
// };

// export default Settings;
