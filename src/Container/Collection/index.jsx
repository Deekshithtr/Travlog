import React from 'react';
import Rectanglecard from '../../Components/Rectanglecard';
import Header from '../../Components/Header';
import './Collection.css';
// import {cardData} from '../../constants/db';
import {useSelector} from 'react-redux';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const Collection = () =>{
    const cardData=useSelector(state=>state);
    const Data=cardData[0].places;
    return(
        <div className="collection-wraper">
            <Header label="Explore" className="header--collection" Icon ={()=><ChevronRightIcon /> } />
           {Data.map(data=><Rectanglecard district ={data.district} state ={data.state} placename ={data.place} image ={data.url} id={data._id}/>)} 
        </div>
    );
}

export default Collection;