import {heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher)=> {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    /* solo acepto los publishers que tengo  */
    if (!validPublishers.includes(publisher)){

        throw new Error(`el publisher ${publisher} no es correcto`)

    }

    /* hago un filter del arreglo, retorno solo los que tengan el editor */
    return heroes.filter( hero => hero.publisher===publisher);

}