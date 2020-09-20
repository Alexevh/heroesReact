import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';


export const PrivateRoute = ({
    isAuthenticated=false, 
    component: Component,
    ...rest

}) => {

    /* voy a guardar la ultima pagina visitada  */
    localStorage.setItem('pagina', rest.location.pathname);



    return (
        <Route  {...rest } component= {

            (props)=> (
                (isAuthenticated) 
                ?  (<Component {...props} />)
                :  (<Redirect to="/login" />)
            )
    
        } />
    )
}


PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}