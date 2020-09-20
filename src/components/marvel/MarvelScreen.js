import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelScreen = () => {
    return (
        <>
            <h1>Heroes del uiverso Marvel</h1>
            <hr/>
          <HeroesList publisher='Marvel Comics' />
        </>
    )
}
