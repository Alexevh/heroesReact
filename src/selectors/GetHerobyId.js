import {heroes } from '../data/heroes';


export const getHeroesById = (id)=> {



    /* hago un find del arreglo, retorno solo los el  tengan el mismo id */
    return heroes.find( hero => hero.id===id);

}