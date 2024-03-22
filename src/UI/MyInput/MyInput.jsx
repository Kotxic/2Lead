import React from 'react';
import cl from './MyInput.module.css'
const MyInput = ({searchQuery, setSearchQuery}) => {
    return (
        <input
            placeholder='Поиск...'
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
            type="text"/>

    );
};

export default MyInput;