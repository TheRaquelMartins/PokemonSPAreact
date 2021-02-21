import React from 'react';

const styleCharacterCard = {
    backgroundColor: 'rgb(255, 241, 251)',
    boxShadow: '0 4px 8px 0 rgb(255, 5, 159, 0.2)',
    transition: '0.3s',
    borderRadius: '3%',
    width: '29%',
    height: '45%',
    padding: '2%',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '4vw',
    margin: '2%',
    flexDirection: 'flex',
    justifyContent: 'space-evenly',
    display: 'inline-block'
};

const CharacterCard = ({ onClick, imageUrl, name }) => (
    <div style={styleCharacterCard} onClick={onClick}>
        <img src={imageUrl} height='100%' width='100%' ></img>
        <p/>
        <div>{name}</div>
    </div>
);

export default CharacterCard;