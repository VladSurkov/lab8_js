import React from 'react';
import Select from './Select/Select';

const style = {
    marginBottom: '50px',
};

const Task5 = () => {
    const cities = ['Харків', 'Київ', 'Львів', 'Дніпро'];

    return (
        <div style={style}>
            <h3>Task 5</h3>
            <Select cities={cities} />
        </div>
    );
};

export default Task5;
