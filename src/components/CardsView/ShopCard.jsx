import React from 'react';
import s from './CardsView.module.css';
import PropTypes from "prop-types";

const ShopCard = (props) => {
    const { product } = props;

    return (
        <a href='#0' className={s.product}>
            <h2 className={s.title}>{product.name}</h2>
            <span className={s.color}>{product.color}</span>
            <div className={s['img-container']}>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={s.footer}>
                <span className={s.price}>${product.price}</span>
                <button type='button'>Add to cart</button>
            </div>
        </a>
    );
}

ShopCard.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }).isRequired,
}

export default ShopCard;