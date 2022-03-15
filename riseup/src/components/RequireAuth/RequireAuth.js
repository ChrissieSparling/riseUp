import {useEffect} from 'react';
import {useLocation, Navigate, Outlet} from 'react-router-dom';
import API from "../../utils/API";
import useAuth from '../../utils/hooks/useAuth';

const RequireAuth = ({allowedRoles}) => {
    const {auth, setAuth} = useAuth();
    const location = useLocation();
   
    return (
        <>
            {!auth.loading ?
                (allowedRoles.includes(auth?.role)
                    ? < Outlet/>
                    : !auth?.userName
                        ? <Navigate to='/unauthorized' state={{from: location}} replace/>
                        : <Navigate to='/login' state={{from: location}} replace/>) : <h1>Loading...</h1>}
        </>
    )
}

export default RequireAuth;