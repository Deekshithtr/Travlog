import propTypes from "prop-types";
import React from 'react';
import './header.css';
import classnames from 'classnames';

const proptypes ={
    label:propTypes.string.isRequired,
    Icon: propTypes.func,
    title: propTypes.string
} 
const Header = ({label, Icon, title,className}) =>
{
    return(
        <div className={classnames({"header":true, [className]: className})}>
            <span className="header-bar">
            <p>{label}</p> 
            {Icon && <Icon />}
            </span>
            {title && <p className="header-title">{title}</p>}
        </div>
    )

}
Header.propTypes=proptypes;
export default Header;