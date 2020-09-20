import React, { useEffect, useReducer } from 'react'
import { authContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter'


const init = ()=>{
    return JSON.parse(localStorage.getItem('user')) || { logged: false};
}

export const HeroesApp = () => {

    /* con esto y con el provider ahora tengo la habilidad de accecer al usuario y al dispatch en
    cualquier parte de mi aplicacion */
    const [user, dispatch] = useReducer(authReducer, {}, init);

    /* voy a grabar  en el localstorage siempre que cambie el usuario*/
    useEffect(() => {
        
        localStorage.setItem('user', JSON.stringify(user));
        
    }, [user])


    return (
        <>

        <authContext.Provider value={{user, dispatch}}>
        <AppRouter />
        </authContext.Provider>
           
        </>
    )
}
