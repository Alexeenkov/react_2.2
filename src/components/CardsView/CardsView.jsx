import React from 'react';
import s from './CardsView.module.css';
import PropTypes from "prop-types";
import ShopCard from './ShopCard';

const CardsView = (props) => {
    const { products } = props;

    return (
        <ul className={s.grid}>
            {products.map((product, index) => {
                return (
                    <li className={s.item} key={index}>
                        <ShopCard product={product} />
                    </li>
                )
            })}
        </ul>
    );
}

CardsView.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    })).isRequired,
}

export default CardsView;