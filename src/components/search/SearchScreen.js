import React, { useMemo, useRef } from 'react'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import {useLocation} from 'react-router-dom';
import   queryString from  'query-string';
import { getHeroesByName } from '../../selectors/GetHeroesByName';

export const SearchScreen = ({history}) => {



/* useLocation es otro hjook de ract-dom, me sirve para saber por ejemplo los parametros de la url, yo aca voy a necesiar
saber si viene por ejemplo ?q=Batman, si tuviera mas volores como q=batman&casa=dc tego que parsearlos ya que solo identifica uno
yo voy a usar npm install query-string que es un pauete que hace las cosas solo
*/
const location = useLocation();
console.log(location.search);
console.log(queryString.parse(location.search));

/* vpy a obtener el termino de query */
const {q =''} = queryString.parse(location.search);




/* voy a generar el estate pasandole el formulario que hice */
const [values, handleInputChange, reset] = useForm({
    termino: q
});

/* Ahora que tengo el state lo desestructuro para obtenerlo */
const {termino } = values;


/* ahoera lo filto
const heroesFiltered = getHeroesByName(termino);

Uso el usememo por que si no lo pongo entonces el estado va a cambiar cada vez que escriba algo y se vuelve a aquejcutar
solo quiero volver a filtrar cuando cambia el termino de busqueda y no en el inputchange
*/
const heroesFiltered = useMemo(()=> getHeroesByName(q), [q]);


const handleSearch = (e)=>{
    e.preventDefault();

    history.push(`?q=${termino}`);
}



    return (
        <>
        <h1>Buscar</h1>
        <hr/>

        <div className="row">
            <div className="col-5">
                <h5>Buscar</h5>
                <form onSubmit={ handleSearch }>
                        <input 
                            onChange ={handleInputChange}
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="termino"
                            autoComplete="off"
                            value={ termino }
                            
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>

            </div>
            <div className="col-7">
                <h5>Resultados</h5>

                {
                    (q ==='') && <div className="alert alert-info"> Buscar algo</div>
                   
                }

                {
                     (heroesFiltered.length===0 && q!='') && <div className="alert alert-danger"> No hay registros</div>
                }

                {
                    heroesFiltered.map( hero=> (
                        <HeroCard
                        key={hero.id}
                        hero={hero} />
                    ))
                }
            </div>
        </div>
            
        </>
    )
}
