import React from 'react';

const styleBackButton = {
    position: 'absolute',
    padding: '1vh',
    alignContent: 'center',
    left: '50%'
};

const BackButton = ({ onClick }) => (
    <div>
        <img style={styleBackButton} onClick={onClick} src='../resources/backbutton.png'></img>
    </div>
);

export default BackButton;