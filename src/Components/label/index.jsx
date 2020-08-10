import React from 'react';
import classnames from 'classnames';
import './label.css';

const Label=({heading,className})=>{
    return(
    <p className={classnames({label:true,[className]:className})}>{heading}</p>
    )
}
export default Label;