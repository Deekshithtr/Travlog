import React from 'react';
import './home.css';
import Header from '../../Components/Header';
import Tabs from '../../Components/Tabs';
import Cards from '../../Components/Cards';
import Recommended from '../../Components/Recommended';
import SearchIcon from '@material-ui/icons/Search';
import Label from '../../Components/label';
// import {cardData} from '../../constants/db';
import {options} from '../../constants/options';
import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {GetItems} from '../../Redux';
const Icon=()=><SearchIcon />;
function Home() {
  // const cardData=props.options;
  const cardData=useSelector(state=>state);
 
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(GetItems());
  },[])
 
  return (
    <div className="home">
      <Header label="Discover" Icon={Icon} />
      <Tabs options = {options} onClick={()=>{}}/>
      <div className="swipe-cards">
      {cardData.map(card=><Cards url={card.url} location={card.location} country={card.country}  id={card.id}/>)}
      <hr/>
      </div>
      <div className="home-heading">
        <Label heading="Popular Food"/>
      </div>
      <div className="swipe-mini-cards">   
      {cardData.map(card=><Recommended heading={card.heading} url={card.foodImage}  country={card.country}/>)}
      <hr/>
      </div>
    </div>
    
  );
}
export default Home;
