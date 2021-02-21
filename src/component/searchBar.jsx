import React, { useState } from 'react';

const searchBarContainerStyle = {
    position: 'absolute',
    display: 'inline-flex',
    flexDirection: 'row',
    height: '10%',
    width: '25%',
    right: '40%',
    top: '89%',
    border: '1px solid rgb(250, 139, 217)'
};

export default function Search({ placeholder, onSearch }) {
    const [value, setValue] = useState('');

    const doSearch = ({ key }) => {
        if (key !== 'Enter') {
            return;
        }

        onSearch(value);
        setValue('')
    };

    return (
        <div >
            <input
                className='form-control'
                type='search'
                style={searchBarContainerStyle}
                value={value}
                placeholder={placeholder}
                onChange={({ target }) => setValue(target.value)}
                onKeyPress={doSearch} >
            </input>
        </div>
    );
};