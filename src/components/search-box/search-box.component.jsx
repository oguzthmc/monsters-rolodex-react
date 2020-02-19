import React from 'react';
// search box css
import './search-box.styles.css';

//placeholder is a props object
export const SearchBox = props => (
    <input
        className='search-box'
        type='search'
        placeholder='search monsters'
        onChange={props.onSearchChange}
    />
);