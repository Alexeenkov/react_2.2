import React, { useState } from 'react';
import IconSwitch from '../IconSwitch/IconSwitch';
import ListView from '../ListView/ListView';
import CardsView from '../CardsView/CardsView';
import PropTypes from "prop-types";
import './Store.css';

const Store = (props) => {
    const { products } = props;

    const [viewCard, setViewCard] = useState('grid'); // Состояние (способ вывода карточек)

    function handleSwitchIcon() {
        viewCard === 'list' ? setViewCard('grid') : setViewCard('list');
    }

    return (
        <div className='wrapper'>
            <div className='icon-wrapper'>
                <IconSwitch viewCard={viewCard} onSwitch={handleSwitchIcon} />
            </div>
            {viewCard === "list" ? (
                <ListView products={products} />
            ) : (
                <CardsView products={products} />
            )}
        </div>
    );
}

Store.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    })).isRequired,
}

export default Store;