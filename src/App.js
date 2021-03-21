
import './App.css';
import React from 'react';
import {Switch, Route, Redirect, NavLink} from 'react-router-dom'
import Pokemon from './containers/pokemon'
import PokemonList from './containers/pokemonList'
import error from './containers/error404'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/" exact component = {PokemonList}></Route>
        <Route path = "/pokemon/:pokemon" exact component = {Pokemon}></Route>
        <Route path = "/error" exact component = {error}></Route>
        <Redirect to = {"/error"} ></Redirect>
      </Switch>
    </div>
  );
}

export default App;
