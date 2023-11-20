import React from 'react';
import style from './ShopItem.module.css';
import Button from '../../Button/Button';

const ShopItem = (props) => {
    return (
        <div className={style.block}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <Button />
        </div>
    );
};

export default ShopItem;
