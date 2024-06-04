import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from 'react-router-dom';
import { privateRoutes } from "../router";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = ()=>{
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading){
      return <Loader/>
    }

    return(
        <Routes>
            {privateRoutes.map(route=>
              <Route
                Component={route.component}    
                path={route.path}
                exact={route.exact}
                key={route.path}
              />
            )}
            <Route path="*" element={<Navigate replace to="/posts" />}/>
        </Routes>
        
    )
}

export default AppRouter