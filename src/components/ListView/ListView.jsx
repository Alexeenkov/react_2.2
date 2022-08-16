import React from 'react';
import s from './ListView.module.css';
import PropTypes from "prop-types";
import ShopItem from './ShopItem';

const ListView = (props) => {
    const { products } = props;

    return (
        <ul className={s.list}>
            {products.map((product, index) => {
                return (
                    <li className={s.item} key={index}>
                        <ShopItem product={product} />
                    </li>
                )
            })}
        </ul>
    );
}

ListView.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    })).isRequired,
}

export default ListView;