import React, { useState, useEffect, useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { 
    GET_ALL_POKEMONS, 
    GET_DETAIL_POKEMON 
} from '../GraphQL/Queries';
import { cx } from '@emotion/css';
import { pData, divData } from './CSS/Style';
import { UserContext } from '../UserContext.js';

const gqlVariables = {
    limit: 10,
    offset: 0,
};

function PokemonsData() {
    return (  
        <Router> 
            <Switch>
                <Route exact path="/" children={<Pokemon />} />
                <Route path="/:name">
                    <Link to="/"><p>Back</p></Link>
                    <DetailPokemon />
                </Route>
            </Switch>
        </Router>           
    );
}


function Pokemon() {  
    const {loading, error, data}  = useQuery(GET_ALL_POKEMONS, {
        variables: gqlVariables,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className={cx(divData)}>
            { data && data.pokemons.results.map(function(value, i) {
                return (
                <div key={i}>
                    <Link to={value.name}><p className={cx(pData)}>{ value.name }</p></Link>
                </div>
                );
            })}
        </div>  
    );
}

function DetailPokemon() {
    let { name } = useParams();    
    const {value, setValue} = useContext(UserContext);

    const nameVariables = {
        name: name,
    };

    const {loading, error, data}  = useQuery(GET_DETAIL_POKEMON, {
        variables: nameVariables,
    });
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;        
  
    return (
      <div>
        <h3>ID: {name}</h3>
            <p>Nilainya adalah : { value }</p>            
            <img src={data.pokemon.sprites.front_default} alt=""/>
            <button onClick={() => setValue(value + 1)}>Catch The Pokemon</button>
            {/* <button>Catch The Pokemon</button> */}
      </div>
    );
}
  

export default PokemonsData;