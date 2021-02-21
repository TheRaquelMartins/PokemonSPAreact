import React, { useState, useEffect } from 'react';
import * as service from '../service';
import Header from '../component/header';
import PokemonDetail from '../component/pokemonDetail';

export default function DetailsPage({ history, match }) {

    const [loading, setLoading] = useState(false);
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [pokemonAttacks, setPokemonAttacks] = useState([]);
    const [pokemonWeakeness, setPokemonWeakeness] = useState([]);
    const [id, setId] = useState(match.params.id);
    const [error, setError] = useState(false);

    const getDetail = () => {

        setLoading(true);

        service.getDetails(id)
            .then(response => {
                setPokemonDetails(response.card);
                setPokemonAttacks(response.card.attacks);
                setPokemonWeakeness(response.card.weaknesses);
                setLoading(false);
            },
                () => { setError(true) });

    };

    const search = (value) => {

        history.push(`/list`);

        service.listing(value);
    }

    useEffect(getDetail, []);

    return (
        <div>
            <Header onClick={() => { history.push(`/list`) }} onSearch={search} />

            {loading && !error ?

                <h1>Loading... </h1> :

                <PokemonDetail pokemonDetail={pokemonDetails} pokemonAttacks={pokemonAttacks} pokemonWeakness={pokemonWeakeness} onClick={() => { history.push(`/list`) }} />
            }

            {error && <h1 style={{ color: 'red' }}>Something went wrong, try again</h1>}

        </div>
    );
};