import React, { useState, useEffect } from 'react';
import * as service from '../service';
import Header from '../component/header';
import CharacterList from '../component/charactersListing';

export default function ListPage({ history }) {

    const [loading, setLoading] = useState(false);
    const [pokemonList, setPokemonList] = useState([]);
    const [error, setError] = useState(false);

    const getList = (value) => {

        setLoading(true);

        service.listing(value)
            .then(response => {
                setPokemonList(response.cards);
                setLoading(false);
            },
                () => { setError(true) });
    };

    useEffect(getList, []);

    return (
        <div>
            <Header onClick={getList} onSearch={getList} />

            <div>
                {loading && !error ?
                    <h1>Loading... </h1> :

                    <CharacterList pokemons={pokemonList} onClick={id => history.push(`/details/${id}`)} />
                }

                {error && <h1 style={{ color: 'red' }}>Something went wrong, try again</h1>}

            </div>

        </div>
    );
};