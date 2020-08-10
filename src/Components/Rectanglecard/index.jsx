import React from 'react';
import propTypes from 'prop-types';
import './rectangle-card.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'; 
import {useDispatch} from 'react-redux';
import {itemDetails} from '../../Redux/Actions/itemAction';

const proptypes = {
    placename:propTypes.string.isRequired,
    state: propTypes.string.isRequired,
    image:propTypes.string.isRequired,
    district: propTypes.string.isRequired
}

const Rectanglecard = ({placename, state, image, district,id}) => {
    const dispatch=useDispatch();
    return(
        <div className = "rectangle-card">
           <Link to='/discover'><img className = "rectangle-card-background" src = {image} onClick={()=>dispatch(itemDetails(id))}/></Link>
            <div className="rectangle-card-label">
                <p className = "rectangle-card-placename">{placename}</p>
                <p className = "rectangle-card-state">{district},{state}</p>
            </div>
        </div>
    );
}

Rectanglecard.propTypes = proptypes;
export default Rectanglecard