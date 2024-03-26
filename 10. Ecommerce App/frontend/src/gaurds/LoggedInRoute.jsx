import React, { useContext } from 'react';
import {  Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const LoggedInRoute = ({ component: Component, children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>
};

export default LoggedInRoute;
