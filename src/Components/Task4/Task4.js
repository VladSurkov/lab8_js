import React from 'react';
import ShopItem from './ShopItem/ShopItem';
import style from './Task4.module.css';

const Task4 = () => {
    return (
        <>
            <h3>Task 4</h3>
            <div className={style.block}>
                <ShopItem
                    title='First'
                    text='first text'
                />
                <ShopItem
                    title='Second'
                    text='second text'
                />
                <ShopItem
                    title='Third'
                    text='third text'
                />
                <ShopItem
                    title='Fourth'
                    text='fourth text'
                />
                <ShopItem
                    title='Fifth'
                    text='fifth text'
                />
            </div>
        </>
    );
};

export default Task4;
