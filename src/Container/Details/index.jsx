import React from 'react';
import './details.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Button from '../../Components/Button';
import {Link} from 'react-router-dom';
import {cardData} from '../../constants/db';
import {useSelector,useDispatch} from 'react-redux';
const Icon=()=><DriveEtaIcon />;

const Details = () =>
{
    const data = useSelector(state=>state)[0];
    const dispatch=useDispatch();
    return(

        <div className="details">
                <div className="details-image-info">
                    <Link to = "/collection"><div className="details-back" ><ArrowBackIosIcon /><p>Back</p></div></Link>
                    <img  className = "details-image" src = {data.url}/>
                    <p className = "details-place-name">{data.place}<p>{data.district}, {data.state}</p></p>
                </div>
            <div className="details-body">
                <p>{data.description}</p>
                <div className="details-button"><Button label = "Visit" Icon = {Icon}/></div>
            </div>
            {/* {console.log("this is data",data)} */}
        </div>
    );
}

export default Details;