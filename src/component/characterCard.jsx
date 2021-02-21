import React from 'react';

const styleCharacterCard = {
    backgroundColor: 'rgb(255, 241, 251)',
    boxShadow: '0 4px 8px 0 rgb(255, 5, 159, 0.2)',
    transition: '0.3s',
    borderRadius: '3%',
    width: '22%',
    height: '35%',
    padding: '1%',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '2.5vw',
    margin: '1%',
    flexDirection: 'flex',
    justifyContent: 'space-evenly',
    display: 'inline-block'
};

const CharacterCard = ({ onClick, imageUrl, name }) => (
    <div style={styleCharacterCard} onClick={onClick}>
        <img src={imageUrl} height='100%' width='100%' ></img>
        <p/>
        <h3>{name}</h3>
    </div>
);

export default CharacterCard;