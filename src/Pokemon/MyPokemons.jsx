
import React, { useState, useEffect, useContext } from 'react';


import { useQuery } from '@apollo/client';
import { GET_ALL_POKEMONS } from '../GraphQL/Queries';
import { UserContext } from '../UserContext.js';

const gqlVariables = {
    limit: 2,
    offset: 0,
};

function MyPokemon() {
    const {loading, error, data}  = useQuery(GET_ALL_POKEMONS, {
        variables: gqlVariables,
    });

    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     document.title = `Title Change ${ count }`
    //     return () => {
    //         document.title = `Hello World`
    //     };
    // });


    const {value, setValue} = useContext(UserContext);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return (             
        <div>
        Hello
            { data && data.pokemons.results.map(function(val, i) {
                return (
                <div key={i}>
                    <p>{ val.name }</p>
                    <p>{ value }</p>
                    {/* <div>
                        <p>Tambah adalah : { count }</p>
                        <button onClick={() => setCount(count + 1)}>Coba Tambah</button>
                    </div> */}
                </div>
                );
            })}
        </div>    
    );
}

export default MyPokemon;