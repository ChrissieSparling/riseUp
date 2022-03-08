import React from "react";
import "../Settings/settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="sttingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        {/* img future dev */}
        <form className="settingsForm">
            {/* <label>Profile Picture</label>
            <div className='settingsPP'>
            <img src="#" alt="" />
            <label>profile pic</label>
            <input type="file" id="finleInput" />
            </div> */}
             <label>Username</label>
          <input type="text" placeholder="Username"/>
          <label>Email</label>
          <input type="text" placeholder="Email"/>
          <label>Password</label>
          <input type="text" placeholder="Password"/>
          <button className="settingsSubmit">Update</button>
          </form>      
      </div>
    </div>
  );
};

export default Settings;
