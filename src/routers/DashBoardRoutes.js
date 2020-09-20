import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
  } from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/NavBar';

export const DashBoardRoutes = () => {
    return (
        <>
           
       <Navbar />
      <div>
        <Switch>
            <Route exact path='/dc' component={DcScreen} />
            <Route exact path='/marvel' component={MarvelScreen} />
            <Route exact path='/hero/:heroeid' component={HeroScreen} />
            <Route exact path='/buscar' component={SearchScreen} />

            <Redirect to="/marvel" />
        </Switch>
      </div>
   
        </>
    )
}
