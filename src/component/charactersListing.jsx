import React from 'react';
import CharacterCard from './characterCard';

const styleCharactersList = {
    flexDirection: 'flex',
    textAlign: 'center',

    justifyContent: 'space-evenly'
};

export default function CharacterList({ pokemons, onClick }) {

    return (
        <div style={styleCharactersList} >
            {pokemons.map(pokemon => {
                return <CharacterCard
                    key={pokemon.id}
                    name={pokemon.name}
                    imageUrl={pokemon.imageUrl}
                    onClick={() => onClick(pokemon.id)} />
            })}
        </div>
    );
};