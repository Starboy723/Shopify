import React,{useContext, useEffect,useState} from 'react'
import './Imgcomp.css';
import {Cart_Context} from '../states/Cart_Context';
import star_icon from '../Assets/star_icon.png';
import {Link} from 'react-router-dom';
import saved_icon from '../Assets/images/saved1.png';
import save_icon from '../Assets/images/save.png';
import {wishlist} from '../components/Wishlist.jsx';
import {useNavigate} from 'react-router-dom';
function Imgcomp(props) {
  const [render,setRender]=useState(false);
  const [cart_value,Incre,Decre,cart_arr,addToCart,removeFromCart,wishlist,setter]=useContext(Cart_Context);
  const navigate=useNavigate();
  const stocks=props.data;
  console.log(wishlist);
  return (
    <div className='main-con' >
    <div className='cat-con' style={{flexWrap:`${props.wrap}`}}>
    {stocks.map(each=>{
      return (
        <div className='main-card' onClick={e=>{navigate(`/${each.category}/${each.id}`);window.scrollTo(0,0)}}>
        <Link to={`/${each.category}/${each.id}`} onClick={e=>window.scrollTo(0,0)} className='img-link' >
        <div className='star-con'>
        <img src={star_icon}  className='star-icon' alt='rating'></img>
        <span>4.5</span>
        </div>
        </Link>
        { (each.id==4 || each.id==7 || each.id==1 || each.id==13 || each.id==18 || each.id==21) && <h4>BEST SELLER</h4>}
        <img src={each.image} className='img' alt={each.id}></img>
        <div className='item-description'>
          <h6>{each.name}</h6>
          <div className='price-con1'>
          <span className='new-price'>₹{each.new_price}</span>
          <span className='old-price'>₹{each.old_price}</span><span className='off'>(70%)</span>
          </div>
        </div>
        <div style={{marginLeft:'160px',marginTop:'-320px', height:'20px',width:'20px'}}>
        {
               wishlist.includes(each.id) ? <img src={saved_icon}  width='20px' onClick={e=>{e.stopPropagation();setter(Number(each.id));setRender(!render);}} style={{marginBottom:'70px'}}></img> : <img src={save_icon} width='20px' onClick={e=>{e.stopPropagation();wishlist.unshift(Number(each.id));setRender(!render)}} style={{marginBottom:'100px'}}/>   
        }
        </div>    
        </div>
      )
    })}

    </div>
    </div>
  )
}

export default React.memo(Imgcomp)