import React from 'react';
import cl from './MySelect.module.css'
const MySelect = ({options, defaultValue, value, onChange}) => {

    return (
        <select
            className={cl.select}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option value='' disabled selected>{defaultValue}</option>
            {options.map(option=>
                <option  key={option.value} value={option.value}>{option.name}</option>
            )
            }

        </select>


    );
};

export default MySelect;