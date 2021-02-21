import React from 'react';

const Weakness = ({ weakness, value }) => (
    <div>
        <h2>Weak against:</h2>
        <h3>&emsp;{weakness}, Damage: {value}</h3>
    </div>
);

export default Weakness;