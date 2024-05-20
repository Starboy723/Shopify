import React,{useContext,useMemo,useState} from 'react'
import { Cart_Context } from '../states/Cart_Context';
import data from '../Assets/all_product';
import './cartComp.css';
import coupon from '../Assets/images/voucher.png';
import empty_cart from '../Assets/images/empty-cart.png';
import {useNavigate} from 'react-router-dom';
import {wishlist} from './Wishlist.jsx';
import saved_icon from '../Assets/images/saved1.png';
import save_icon from '../Assets/images/save.png';
function CartComp() {
  const navigate=useNavigate();
  const [render,setRender]=useState(false);
    const [cart_value,Incre,Decre,cart_arr,addToCart,removeFromCart,wishlist,setter]=useContext(Cart_Context);
    const cart_Items=data.filter(each=>{
      return cart_arr.includes(each.id.toString());
    });
   var total=useMemo(()=>cart_Items.reduce((acc,each)=>acc+each.new_price,0),[cart_arr]);
  return (
    <div className='main-cart-con'>
    {
      cart_arr.length ==0 && 
      <img src={empty_cart} alt={<h1>CART IS EMPTY</h1>}/>
    }
    {
    cart_Items.length>0 &&
        <div className='bag-con'>
        <h3 style={{marginLeft:'10px'}}>BAG</h3>
        <div className='bagItems-con'>
         {
            cart_Items.map(each=>{
            return(
                <div className='bagItems-div' onClick={e=>navigate(`/${each.category}/${each.id}`)}>
                  <img src={each.image} alt={each.name} width='110px' height='127px'/>
                  <div className='item-des-main-div'>
                  <div className='itemname-div'>
                    <h4 >{each.name}</h4>
                    <section style={{display:'flex',gap:'5px',alignItems:'center'}}>
                    <span>MRP: {each.new_price}</span>
                    <span style={{fontSize:'10px',color:'green'}}>(70%)</span>
                    </section>
                  </div>
                  <h6 style={{fontFamily:'sans-serif',fontSize:'10px',color:'grey'}}>category :<span style={{marginLeft:'5px',fontWeight:'bold',color:'black'}}>{each.category}</span></h6>
                  <div className='cart-size-quantity-div'>  
                    <section>
                    <span style={{color:'grey'}}>Size</span>
                  <select name='size-option' className='size-option'>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                  </select>
                    </section>
                    <section>
                  <span style={{color:'grey'}}>Quantity</span>
                  <select name='quantity-option' className='quantity-option'>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                  </select>
                    </section>
                  </div>
                  <div style={{display:'flex',gap:'20px'}}>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 256 256"><path fill="rgb(78, 78, 78)" d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"/></svg> */}
                  <div style={{marginTop:'3px',height:'20px',width:'20px'}}>
        {
               wishlist.includes(Number(each.id)) ? <img src={saved_icon}  width='20px' onClick={e=>{e.stopPropagation();setter(each.id);setRender(!render)}} style={{marginBottom:'70px'}}></img> : <img src={save_icon} width='20px' onClick={e=>{e.stopPropagation();wishlist.unshift(Number(each.id));setRender(!render)}} style={{marginBottom:'100px'}}/>   
        }
        </div> 
                  <svg onClick={e=>{
                    e.stopPropagation();
                    removeFromCart(each.id);
                    Decre();
                  }} xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 48 48"><path fill="rgb(78, 78, 78)" d="M20 10.5v.5h8v-.5a4 4 0 0 0-8 0m-2.5.5v-.5a6.5 6.5 0 1 1 13 0v.5h11.25a1.25 1.25 0 1 1 0 2.5h-2.917l-2 23.856A7.25 7.25 0 0 1 29.608 44H18.392a7.25 7.25 0 0 1-7.224-6.644l-2-23.856H6.25a1.25 1.25 0 1 1 0-2.5zm-3.841 26.147a4.75 4.75 0 0 0 4.733 4.353h11.216a4.75 4.75 0 0 0 4.734-4.353L36.324 13.5H11.676zM21.5 20.25a1.25 1.25 0 1 0-2.5 0v14.5a1.25 1.25 0 1 0 2.5 0zM27.75 19c.69 0 1.25.56 1.25 1.25v14.5a1.25 1.25 0 1 1-2.5 0v-14.5c0-.69.56-1.25 1.25-1.25"/></svg>
                  </div>
                  </div>
                </div>
            );
          })
         }
        </div>
        </div>
    }
        {
           cart_Items.length>0 &&
        <div className='summary-con'>
        <div style={{position:'relative'}}>
        <img src={coupon} width='40px' style={{position:'absolute',right:'10px',bottom:'0px'}}/>
            <input className='coupon' type='text' placeholder='Apply Coupon'/>
          </div>
        <h2>Summary</h2> 
          <div >
            <span>Total MRP<span style={{color:'grey'}}>(Incl.of taxes)</span></span>
            <span>{total}</span>
          </div>
          <div >
           <span>Estimated Delivery & Handling</span>
           <span>120</span>
          </div>
          <div >
         <span>Discount</span>
         <span>-{`${Number(200)}`}</span>
          </div>
          <div style={{fontWeight:"bold"}}>
            <span>Subtotal</span>
            <span>{total+200}</span>
          </div>
          <div className='continue-div'>
              <button className='btns' style={{marginLeft:'20px',borderRadius:'10px'}}>CONTINUE</button>
          </div>
        </div>
        }
    </div>
  )
}

export default React.memo(CartComp);