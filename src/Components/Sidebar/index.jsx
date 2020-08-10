import React from 'react';
import Circle from '../CircleComponent';
import StarIcon from '@material-ui/icons/Star';
import DirectionsIcon from '@material-ui/icons/Directions';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import './sidebar.css';

const Sidebar = ({review,distance,weather}) =>
{
    return(
        <div className = "sidebar">
            <Circle Icon = { () =><StarIcon/>} label1 = {review} label2 = "Rating" color="#f9640ae3"/>
            <Circle Icon = { () =><DirectionsIcon/>} label1 = {`${distance}km`} label2 = "Direction" color="#5c0dd0"/>          
            <Circle Icon = { () =><WbSunnyIcon/>} label1 ={weather} label2 = "Weather" color="#f710a7c2"/>
        </div>
    );
}

export default Sidebar;