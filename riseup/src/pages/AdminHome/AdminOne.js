import {useNavigate} from 'react-router-dom'
import useAuth from "../../utils/hooks/useAuth";


const AdminHome = () => {
    const {auth} = useAuth();
    const navigate = useNavigate();

    return(
        <div className="user-home-btn-box">
                       <button className="btnUseHome" onClick={() => navigate("/forums")}>Add New User</button>
                       {/* <button className="btnUseHome" onClick={() => navigate("/forums")}>Change User Status</button> */}
                       {/* <button className="btnUseHome" onClick={() => navigate("/forums")}>Remove a User</button> */}
                       <button className="btnUseHome" onClick={() => navigate("/forums")}>See All Users</button>
                       <button className="btnUseHome" onClick={() => navigate("/forums")}>See All Posts</button>
                       {/* <button className="btnUseHome" onClick={() => navigate("/forums")}>Remove User Item</button> */}
        </div>
    );
}

export default AdminHome;