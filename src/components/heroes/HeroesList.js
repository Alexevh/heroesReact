import React, { useMemo } from 'react'
import { getHeroesById } from '../../selectors/GetHerobyId'
import { getHeroesByPublisher } from '../../selectors/getHeroesbyPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({publisher}) => {

    //const heroes = getHeroesByPublisher(publisher);

    const heroes =  useMemo(() =>  getHeroesByPublisher(publisher), [publisher]);

    return (
        <>
        
        <div className='card-columns animate__animated animate__fadeIn__fast'>
            {
                /* hago los LI, la sintaxis es arreglo.map , el nombre de la variable que va a tener
                cada elemento del arreglo y => luego parentesis por que va a devolver un objeto por cada uno */
                heroes.map( hero=> (<HeroCard key={hero.id} hero={hero} />) )
            }

        </div>
            
        </>
    )
}
