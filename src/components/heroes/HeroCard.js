import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = (heroe) => {

    
 
    return (
        <>

            <div className='card ms-3' style={{ maxWidth: 540}}>
                <div className="row no-gutters">
                    <div className='col-md-4'>
                        <img src={`./assets/heroes/${heroe.hero.id}.jpg`} className='card-img' alt={heroe.hero.superhero} />
                    </div>
                    <div className='col-md-8'>
                       <div className="card-body">
                       <h5 className="card-title">{heroe.hero.superhero}</h5>
                       <p className="card-text">{heroe.hero.alter_ego}</p>

                       {
                           /* orro ternario if condicion && que equivale a lo que se retorna */
                           (heroe.hero.alter_ego !== heroe.hero.characters) && <p className="card-text" >
                                <small> AKA {heroe.hero.characters}</small></p>

                       }

                        <p className="card-text"><small>{heroe.hero.first_appearance}</small></p>

                        <Link className="" to={`./hero/${heroe.hero.id}`} >
                        ...Mas
                        </Link>

                        
                       </div>
                    </div>
                </div>
            </div>
            
            
        </>
    )
}
