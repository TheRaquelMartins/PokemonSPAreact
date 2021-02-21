import { useState } from 'react';

const url = 'https://api.pokemontcg.io/v1/cards';

export function listing(value) {   

    const response = fetch(value ? `${url}?name=${value}` : url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            console.log('list');
            return response.json()
        });

    return response;
};

export function getDetails(id) {

    const response = fetch(`${url}/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            console.log('details');
            return response.json()
        });

    return response;
};