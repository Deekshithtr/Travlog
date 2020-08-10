import propTypes from 'prop-types';
import React from 'react';
import './circle.css';

const defaultprops = {
    label1: "",
    label2: ""
}

const proptypes = {
    Icon: propTypes.func.isRequired,
    lablel1: propTypes.string,
    label2: propTypes.string,
    color:propTypes.string
}

const Circle = ({Icon, label1, label2, color}) =>
{
    return(
        <div className="circle-wrap">
            <div className="circle" style={{backgroundColor:`${color}`}}>
                <Icon/>
            </div>
            <p className = "circle__label1">{label1}</p>
            <p className = "circle__label2">{label2}</p>
        </div>
    );
}

Circle.defaultProps = defaultprops;
Circle.propTypes= proptypes;
export default Circle;