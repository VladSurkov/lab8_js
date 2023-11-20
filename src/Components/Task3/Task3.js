import React from 'react';
import style from './Task3.module.css';

const Task3 = (props) => {
    return (
        <>
            <h3>Task 3</h3>
            <input
                className={style.input}
                value={props.default}
            />
        </>
    );
};

export default Task3;
