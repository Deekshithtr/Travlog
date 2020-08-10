import propTypes from 'prop-types';
import React from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import './button.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'; 
const proptypes = {
    label: propTypes.string.isRequired,
    Icon:propTypes.func.isRequired
}
const Button = ({label,Icon}) =>
{
    return(
        <Link to={`/${label}`} className="buttonlink"><button className = "button">
            <Icon />
            <p>{label}</p>
        </button>
        </Link>
 
    );
}
Button.propTypes = proptypes;
export default Button;