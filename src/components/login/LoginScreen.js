
import React, { useContext } from 'react'
import { authContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

/* por defecto cuando se renderiza usando router tengo varios valores que puedo destructurar */
export const LoginScreen = ({history}) => {

    /* obtengo el contenxt, solo me interesa el dispatch aqui por eso solo desestructuro esa funcion */
    const {dispatch} = useContext(authContext);



    const handleLogin = ()=> {
        dispatch({
            type: types.login,
            payload: {
                nombre: 'Alex'
            }
        });
        /* history.push('/'); esto redirecciona   */

        const pagina = localStorage.getItem('pagina') || '/';
        /* Estor edirecciona y borra el history asi el usuario no pede volver al login */
        history.replace(pagina);

    }
    return (
        <>
        <div className="container m-5">
        <h1>Login</h1>
        <hr/>

            <button className="btn btn-primary"
                    onClick={handleLogin}
            >Login</button>
        </div>
            
        </>
    )
}
