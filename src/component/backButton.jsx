import React from 'react';
import BackButtonImage from '../resources/backbutton.png';

const styleBackButton = {
    position: 'absolute',
    padding: '1vh',
    alignContent: 'center',
    left: '50%'
};

const BackButton = ({ onClick }) => (
    <div>
        <img style={styleBackButton} onClick={onClick} src={BackButtonImage}></img>
    </div>
);

export default BackButton;