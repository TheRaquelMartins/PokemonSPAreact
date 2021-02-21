import React from 'react';

const styleDetails = {
    padding: '1vw',
};

export default function CharacterDetails({ pokemonDetail }) {

    return (
        <div style={styleDetails} >
            <h2>Card Type</h2>
            <h3>&emsp;{pokemonDetail.supertype}</h3>

            <h2>Subtype</h2>
            <h3>&emsp;{pokemonDetail.supesubtypertype}</h3>

            <h2>Hp</h2>
            <h3>&emsp;{pokemonDetail.hp}</h3>

            <h2>Description</h2>
            <h3>&emsp;{pokemonDetail.text}</h3>

        </div>
    );
};