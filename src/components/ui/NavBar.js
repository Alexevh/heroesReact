import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { authContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    /* obtengo el contenxt, solo me interesa el dispatch aqui por eso solo desestructuro esa funcion */
    const {user, dispatch} = useContext(authContext);

    /* en vez de obtener el HIstory por parametro lo obtengo del contexto, el router-dom viene con un hook para esto */
    const history = useHistory();

    const handleLogout = ()=>{

        dispatch({
            type: types.logout,
            payload: {

            }
        });

        history.replace('/login');

    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/buscar"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-info">
                {user.nombre}
            </span>

                    <button 
                    
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                        
                    >
                        Logout 
                    </button>
                </ul>
            </div>
        </nav>
    )
}