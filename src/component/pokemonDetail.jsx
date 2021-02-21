import React from 'react';
import CharacterDetails from './characterDetails';
import DetailsCard from './detailsCard';
import ItemDetails from './itemDetails';
import BackButton from './backButton';

const styleDetailBody = {
    display: 'flex',
    backgroundColor: 'rgb(255, 241, 251)',
    boxShadow: '0 4px 8px 0 rgba(255, 5, 159, 0.2)',
    transition: '0.3s',
    padding: '1vw',
    borderRadius: '3%'
};

export default function PokemonDetail({ pokemonDetail, pokemonWeakness, pokemonAttacks, onClick }) {

    return (
        <div>
            <div style={styleDetailBody}>
                <DetailsCard pokemon={pokemonDetail} />

                    { pokemonDetail.supertype != "Pokémon" ?
                        
                        <ItemDetails pokemonDetail={pokemonDetail} /> :

                        < CharacterDetails
                            pokemonDetail={pokemonDetail}
                            pokemonAttacks={pokemonAttacks}
                            pokemonWeakness={pokemonWeakness} />
                    }
               
            </div>

            <BackButton onClick={onClick}></BackButton>
        </div>
    );
};