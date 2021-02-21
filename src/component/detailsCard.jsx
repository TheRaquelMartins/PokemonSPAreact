import React from 'react';
import CharacterCard from './characterCard';

const styleCharacterDetails = {     
    padding: '1vw',
    justifyContent: 'center'
};

export default function DetailsCard({ pokemon }) {

    return (
        <div style={styleCharacterDetails} >
            <CharacterCard
                key={pokemon.id}
                name={pokemon.name}
                imageUrl={pokemon.imageUrl}
            />
        </div>
    );
};