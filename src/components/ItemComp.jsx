import React from 'react'
import {useParams} from 'react-router-dom';
import ItemPrev from './ItemPrev';
import data from '../Assets/new_collections';
import Imgcomp from '../pages/Imgcomp.jsx';
function ItemComp() {
    const {id}=useParams();
  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:'97vw'}}>
      <ItemPrev id={id}/>
      <div >
        <h3>You Might Also Like</h3>
        <div style={{width:'97vw',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',overflow:'scroll'}}>
        <Imgcomp wrap={'no-wrap'}  data={data}/>
        </div>
      </div>
      
    </div>
    
  )
}

export default React.memo(ItemComp);