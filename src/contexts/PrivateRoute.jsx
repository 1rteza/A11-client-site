import React, { use } from 'react';
import { Navigate } from 'react-router';
import Loading from '../pages/Loading';
import { AuthContext } from './AuthContext/AuthContext';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext);

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;