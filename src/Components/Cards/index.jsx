import React from 'react';
import './cards.css';
import propTypes from 'prop-types';
import classnames from 'classnames';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'; 
import {useDispatch} from 'react-redux';
import {specificItem} from '../../Redux';
const proptypes={
    url:propTypes.string.isrequired,
    location:propTypes.string,
    country:propTypes.string,
    className:propTypes.string
}

const Cards = ({url,location,country,className,id}) =>
{
    const dispatch=useDispatch();
    return(
             <div className={classnames({"card":true, [className]: className})}>
                <Link to="/collection"><img src={url} className="card-image" alt={country} onClick={()=>{dispatch(specificItem(id))}}/></Link>
                {location && <div className="card-location">
                <p className="card-location__place">{location}</p>
                <p className="card-locatio__country">{country}</p>
            </div>
            }
        </div>
    );
}
Cards.propTypes=proptypes;
export default Cards;