import {heroes } from '../data/heroes';

export const getHeroesByName = (name)=> {

    if (name===''){
        return [];
    }

    name = name.toLowerCase();
    /* hago un filter del arreglo, retorno solo los que tengan el editor */
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name));

}