import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../utils/hooks/useAuth";
import API from "../../utils/API";
import './add-user.css'


const AddUser = () => {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    // const [username, setUsername] = useState("");
    const [userID, setUserID] = useState('')
    const [userToAdd, setUserToAdd] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        role: '',
        email: '',
        birthday: '',
        zipCode: '',
    });
    // const [userId, setUserId] = useState(0);
    // const [token, setToken] = useState("");



    const handlePostNewUser = (e) => {
        console.log(userToAdd)
        e.preventDefault();
        API.signUp(userToAdd)
            .then((newData) => {
                if (newData.id) {
                    console.log(newData)
                    // setUserId(newData.id);
                    // setUsername(newData.username);
                    // setToken(newData.accessToken);
                    // localStorage.setItem("token", newData.accessToken);
                    alert('User has been added!')
                } else {
                    alert('Your request was not successful. \nPlease check the form and try again.');
                    console.log('front end post req prob:', newData)
                    return
                }
            })
            .catch(err => {
                alert('Sorry! Our bad, there was a problem.');
                console.log('there was an error', err)
                return
            })
    };

    const handleCollectUser = e => {
        console.log(e.target.name, e.target.value)
        setUserToAdd({
            ...userToAdd,
            [e.target.name]: e.target.value
        })
    }

  


    return (
        <div className="admin-user">
            <form className="which-user">
                <h2>Find the User:</h2>
                <label for='user-id'>User ID: </label>
                <input name='user-id' type='number' onChange={e=>setUserID(e.target.value)}></input>
                <button>Find User</button>    
            </form>
            <form className='admin-form2'>
                <h1 className="admin-form-title">Update User</h1>

                <input
                    type="text"
                    placeholder="first name"
                    className="admin-inpt"
                    required
                    name='firstName'
                    onChange={handleCollectUser}
                />

                <input
                    type="text"
                    placeholder="
                last name"
                    className="admin-inpt"
                    required
                    name='lastName'
                    onChange={handleCollectUser}
                />

                <input
                    type="date"
                    placeholder="birthday"
                    className="admin-inpt"
                    required
                    name='birthday'
                    onChange={handleCollectUser}
                />

                <input
                    type="text"
                    placeholder="zip code"
                    className="admin-inpt"
                    required
                    name='zipCode'
                    onChange={handleCollectUser}
                />

                <input
                    type="text"
                    placeholder="email"
                    className="admin-inpt"
                    required
                    name='email'
                    onChange={handleCollectUser}
                />

                <input
                    type="text"
                    placeholder="user name"
                    className="admin-inpt"
                    required
                    name='username'
                    onChange={handleCollectUser}
                />
{/* 
                <input
                    type="text"
                    placeholder="password"
                    className="admin-inpt"
                    required
                    name='password'
                    onChange={handleCollectUser}
                /> */}

                {/* <input
                    type="text"
                    className="admin-inpt"
                    placeholder="role"
                    required
                    name='role'
                    onChange={handleCollectUser}
                /> */}
                                <select 
                required
                name='role'
                onChange={handleCollectUser}
                className="admin-inpt">
                    <option>Choose Role</option>
                    <option value={'admin'}>Admin</option>
                    <option value={'mod'}>Moderator</option>
                    <option value={'paidUser'}>User</option>
                </select>
{/* 
                <label>
                    <input type="checkbox" className="checkbox"></input>
                    Has user agreed to terms and been provided a copy?
                </label> */}

                <button className="btnLogSign">Update User</button>

            </form>
        </div>
    )
}

export default AddUser