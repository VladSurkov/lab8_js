import React from 'react';

const Select = (props) => {
    return (
        <select>
            {props.cities.map((city) => {
                return <option>{city}</option>;
            })}
        </select>
    );
};

export default Select;
