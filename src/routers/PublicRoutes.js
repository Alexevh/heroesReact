import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

/* Public Route son paginas a las que NO voy a dejar acceder a usuarios autenticados, como el mismo login pr ejemplo, en una de
esas no es el mejor nombre */
export const PublicRoutes = ({
    isAuthenticated=false, 
    component: Component,
    ...rest

}) => {
    return (
        <Route  {...rest } component= {

            (props)=> (
                (!isAuthenticated) 
                ?  (<Component {...props} />)
                :  (<Redirect to="/" />)
            )
    
        } />
    )
}


PublicRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}