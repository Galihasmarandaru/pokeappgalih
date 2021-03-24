import React, { useState, useEffect } from 'react';
import "./App.css";
import { UserContext } from './UserContext'

import PokemonsData from './Pokemon/Pokemons'
import MyPokemon from './Pokemon/MyPokemons'
import NavigationMenu from './Navigation/Menu'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [value, setValue] = useState('Hello Pokemon');

  return (
      <Router>
        <NavigationMenu />
        <UserContext.Provider value={{value, setValue}}>
            <Route exact path="/" component={PokemonsData} />
            <Route exact path="/my-pokemons" component={MyPokemon} />           
        </UserContext.Provider>
      </Router>
    );  
};

export default App;