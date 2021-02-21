import React from 'react';
import Attacks from './attacks';
import Weakness from './weakness';

const styleDetails = {
    flex: '70%'
};

export default function CharacterDetails({ pokemonDetail, pokemonWeakness, pokemonAttacks, }) {

    return (
        <div style={styleDetails} >
            <h2>Pokemon Type</h2>
            <h3>&emsp;{pokemonDetail.types}</h3>

            <h2>Super Type</h2>
            <h3>&emsp;{pokemonDetail.supertype}</h3>

            <h2>Evolves From</h2>
            <h3>&emsp;{pokemonDetail.evolvesFrom}</h3>

            <div>
                {pokemonAttacks.map((attack, i) => {
                    return <Attacks
                        key={i}
                        name={attack.name}
                        text={attack.text}
                        damage={attack.damage} />
                })}
            </div>

            <div>
                {pokemonWeakness.map((weakness, i) => {
                    return <Weakness
                        key={i}
                        weakness={weakness.type}
                        value={weakness.value} />
                })}
            </div>
        </div>
    );
};