import React from 'react';
import s from './IconSwitch.module.css';
import PropTypes from "prop-types";

const IconSwitch = (props) => {
    const { viewCard, onSwitch } = props;

    const icon = viewCard === 'list' ? 'view_list' : 'view_module';

    return (
        <span className={"material-icons " + s['switch-btn']} onClick={onSwitch}>
            { icon }
        </span>
    );
}

IconSwitch.propTypes = {
    viewCard: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired,
}

export default IconSwitch;