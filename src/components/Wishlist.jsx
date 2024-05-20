import React,{useContext} from 'react'
import data from '../Assets/all_product';
import './Wishlist.css';
import { Cart_Context } from '../states/Cart_Context';
import Imgcomp from '../pages/Imgcomp';
import emptyWishlist from '../Assets/images/empty-wishlist-icon1.png';
function Wishlist() { 
  const [cart_value,Incre,Decre,cart_arr,addToCart,removeFromCart,wishlist,setter]=useContext(Cart_Context);
   const wishlist_arr=data.filter(each=>wishlist.includes(each.id));
  if(wishlist_arr.length==0)
    {
      return (
        <div style={{height:'100vh',display:'flex',justifyContent:'center',gap:'14px',height:'100vh',flexDirection:'column',alignItems:"center"}}>
        <img src={emptyWishlist} width='500px' height='500px' style={{opacity:0.7}}></img>
        <h3>Wishlist is empty</h3>
        </div>
      )
    }
      return (
        <div style={{height:'100vh'}}>
    <center><h1>WISHLIST</h1></center>
    <div className='wishlist-con' style={{width:'97vw',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',overflow:'scroll'}}>
    <hr />
    <Imgcomp data={wishlist_arr} wrap={'nowrap'} />
    </div>
        </div>
  )
}

export default React.memo(Wishlist);