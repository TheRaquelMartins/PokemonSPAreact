import React from 'react';

const Attacks = ({ name, text, damage }) => (
    <div>
        
        <h2>Attack: {name}</h2>
        <h3>&emsp;{text}</h3>
        <h3>&emsp;Damage: {damage}</h3>
    </div>
);

export default Attacks;