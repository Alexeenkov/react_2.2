import React from 'react';
import s from './ListView.module.css';
import PropTypes from "prop-types";

const ShopItem = (props) => {
    const { product } = props;

    return (
        <a href='#0' className={s.product}>
            <div className={s['img-container']}>
                <img src={product.img} alt={product.name} />
            </div>
            <h2 className={s.title}>{product.name}</h2>
            <span className={s.color}>{product.color}</span>
            <span className={s.price}>${product.price}</span>
            <button type='button'>Add to cart</button>
        </a>
    );
}

ShopItem.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }).isRequired,
}

export default ShopItem;