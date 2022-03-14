import {useNavigate} from 'react-router-dom'
import useAuth from "../../utils/hooks/useAuth";


const ModHome = () => {
    const navigate = useNavigate();
    const {auth} = useAuth();

    return(
        <div>
            <button className="btnUseHome" onClick={() => navigate("/forums")}>See All Posts</button>
        </div>
    );
}

export default ModHome;