import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/GetHerobyId';

export const HeroScreen = ({history}) => {

    /* este Hook es propio del react ruter dom, extrae los parametros que vienen por el url, puedo desestructurarlo
    como acabod e hacer o recibir el objeto completo*/
    const {heroeid} = useParams();
    
    
    //const hero = getHeroesById(heroeid);

    /* uso el memo ya que si el id no cambia no tengo por que volver a buscarlo */
    const hero =  useMemo(() =>  getHeroesById(heroeid), [heroeid]);

    console.log('el heroe es', hero)

    if (!hero){

        return <Redirect to='/' />;
    }

    const handleVolver = ()=>{

        if (history.length <=2){
            history.push('/')
        }
        /* regresa a la pantalla anteriro */
        history.goBack();
    }

    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <img src={`../assets/heroes/${hero.id}.jpg`} alt={hero.superhero}  className="img-thumbnail"/>
                </div>
                <div className="col-8">
                    <h3>{hero.superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Alter ego: {hero.alter_ego}</b>
                        </li>
                        <li className="list-group-item">
                            <b>Publisher: {hero.publisher}</b>
                        </li>
                        <li className="list-group-item">
                            <b>Aparicion: {hero.first_appearance}</b>
                        </li>
                    </ul>
                    <h5> Characters:</h5>
                    <p>{hero.characters}</p>
                    <button className="btn btn-success "
                        onClick={handleVolver}
                    > Volver </button>
                </div>
            </div>
           
        </>
    )
}
