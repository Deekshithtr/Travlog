import React from 'react';
import './recommended.css';
import propTypes from 'prop-types';

const proptypes={
    url:propTypes.string,
    country:propTypes.string,
    heading:propTypes.string
}

const Recommended = ({url,country,heading}) =>
{
    return(
        <div className="recommended-cards">
             <div className="recommended-card">
                <img src={url} className="card-image" alt={country}/>
                <p className="card-foodname">{country}</p>
        </div>
        </div>
    );
}

export default Recommended;