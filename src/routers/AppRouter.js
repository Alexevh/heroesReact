import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { authContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/NavBar';
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {


const {user} = useContext(authContext);

    return (
        <>

<Router>
      <div>


       
        <Switch>
            <PublicRoutes exact path='/login' component={LoginScreen}   isAuthenticated={user.logged}/>
            {/* Esto es para poder tener un dise;o para unas rutas como el login y otro diferente para las demas paginas
                todo lo que no sea login va al otro switch de rutas
            */}
            <PrivateRoute  path='/' component={DashBoardRoutes} isAuthenticated={user.logged}/>
        </Switch>
      </div>
    </Router>
            
        </>
    )
}
