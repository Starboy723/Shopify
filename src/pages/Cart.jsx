import React,{useContext} from 'react'
import './cart.css';
import CartComp from '../components/CartComp';
import Imgcomp from './Imgcomp';
import data from '../Assets/all_product';
import { Cart_Context } from '../states/Cart_Context';
function Cart() {
  const [cart_value,Incre,Decre,cart_arr,addToCart,removeFromCart,wishlist,setter]=useContext(Cart_Context);
  const new_data=data.filter(each=>wishlist.includes(Number(each.id)));
    return (
    <div className='cart-main-con' style={{display:'flex',flexDirection:'column',width:'97vw'}}>
    <CartComp/>
    {wishlist.length!=0 &&
      <div style={{display:'flex',flexDirection:'column'}}>
    <center>Your Wishlist</center>
    <div>
    <Imgcomp wrap={'no-wrap'} data={new_data}/>
     </div>
      </div>
    }
    </div>
  )
}

export default React.memo(Cart);