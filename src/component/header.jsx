import React from 'react';
import SearchBar from './searchBar';

const styleOfMainDiv = {
    display: 'flex',
    width: '100%',
    position: 'relative',
    marginBottom: '2%'
};

const stylePageHeader = {
    width: '100%'
};

const styleHomeButton = {
    position: 'absolute',
    top: '2%',
    left: '90%',
    height: '17%'
};

const styleTitle = {
    position: 'absolute',
    top: '20%',
    left: '19%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'fantasy',
    fontSize: '5vw'
};

const Header = ({ onClick, onSearch }) => (
    <div style={styleOfMainDiv}>
        <img style={stylePageHeader} src='../resources/header.jpg' ></img>
        <img style={styleHomeButton} onClick={onClick} src='../resources/home.png' ></img>
        <div style={styleTitle}>Search them all</div>
        <SearchBar placeholder="Search by name..." onSearch={onSearch} ></SearchBar>
    </div>
);

export default Header;