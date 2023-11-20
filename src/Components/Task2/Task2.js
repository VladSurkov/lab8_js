import React from 'react';
import style from './Task2.module.css';

const Task2 = () => {
    return (
        <>
            <h3>Task 2</h3>
            <table className={style.table}>
                <tr>
                    <td>
                        <h5>First Name</h5>
                    </td>
                    <td>
                        <p>John</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Last Name</h5>
                    </td>
                    <td>
                        <p>Silver</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h5>Occupation</h5>
                    </td>
                    <td>
                        <p>Pirate Capitan</p>
                    </td>
                </tr>
            </table>
        </>
    );
};

export default Task2;
