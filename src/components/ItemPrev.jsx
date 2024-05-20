import React,{useContext,useEffect,useState} from 'react'
import data from '../Assets/all_product';
import './ItemPrev.css';
import starIcon1 from '../Assets/star_icon.png';
import starIcon2 from '../Assets/star_dull_icon.png';
import {Cart_Context} from '../states/Cart_Context.jsx';
import genuine_icon from '../Assets/genuine_png.avif';
import return_icon from '../Assets/easyreturns_png.png';
import secure_icon from '../Assets/secure_png.png';
import cart_img from '../Assets/images/cart-icon.png';
import wishlist_img from '../Assets/images/wishlist-icon.png';
function ItemPrev(props) {
  const [slidestate,setSlide]=useState({slide1:false,slide2:false,slide3:false});
  const [newData]=data.filter(each=>each.id==props.id);
  const [render,setRender]=useState(false);
  const [cart_value,Incre,Decre,cart_arr,addToCart,removeFromCart,wishlist,setter]=useContext(Cart_Context);
  function animi(option){
    const opt=document.getElementsByClassName(option);
    if(opt[0].classList.contains('open-des')){
         opt[0].classList.remove('open-des');
         opt[0].classList.add('close-des');
    }
    else{
      opt[0].classList.add('open-des');
        opt[0].classList.remove('close-des');
    }
  }
   return (
    <div className='imgPrev-con'>
    <div className='imgs-div'>
      <img src={newData.image} alt='img'></img>
      <img src={newData.image} alt='img'></img>
      <img src={newData.image} alt='img'></img>
      <img src={newData.image} alt='img'></img>
    </div>
    <div className='main-img'>
      <img src={newData.image} alt='img'></img>
    </div>
    <div className='des-con'>
      <span className='title'>{newData.name}</span>
      <div className='star-div'>
           <img src={starIcon1}></img>
           <img src={starIcon1}></img>
           <img src={starIcon1}></img>
           <img src={starIcon1}></img>
           <img src={starIcon2}></img>
           <span>(254)</span>
      </div>
      <div className='price-div'>       
      <span className='old-price'>₹{newData.old_price}</span>
      <span className='new-price'>₹{newData.new_price}</span>
      </div>
      <span className='color-label'>Select Color</span>
      <div className="color-con">
      <input type="radio" name="radio" id='radio' className="radio" value="red"/> 
      <label htmlFor="radio" className="lbl"><div className="lbl-divs lbl-div1"></div></label>
    <input type="radio" name="radio" id="radio2" className="radio" value="blue"/>
    <label htmlFor="radio2"><div className="lbl-divs lbl-div2"></div></label>
    <input type="radio" name="radio" id="radio3" className="radio" value="green"/>
    <label htmlFor="radio3"><div className="lbl-divs lbl-div3"></div></label>
    <input type="radio" name="radio"  id="radio4" className="radio" value="yellow"/>
    <label htmlFor="radio4"><div className="lbl-divs lbl-div4"></div></label>
   </div>
      <span className='size-label'>Select Size</span>

      <div class="size-con">
      <input type="radio" name="size-radio" id='size-s' class="radio" value="small"/> 
      <label for="size-s" class="lbl"><div class="inside-div">S</div></label>
    <input type="radio" name="size-radio" id="size-m" class="radio" value="medium"/>
    <label for="size-m" class="lbl"><div class="inside-div">M</div></label>
    <input type="radio" name="size-radio" id="size-l" class="radio" value="large"/>
    <label for="size-l" class="lbl"><div class="inside-div">L</div></label>
    <input type="radio" name="size-radio"  id="size-xl" class="radio" value="extralarge"/>
    <label for="size-xl" class="lbl"><div class="inside-div">XL</div></label>
    <input type="radio" name="size-radio" id="size-xxl" class="radio" value="extraextralarge"/>
    <label for="size-xxl"class="lbl"><div class="inside-div">XXL</div></label>
   </div>
      <div className='btns-div'>
      <button onClick={e=>{
      Incre();
      addToCart(props.id)}} className='cart-btn btns'><span style={{fontSize:'20px'}}>Add To Cart</span></button>
      {
        wishlist.includes(Number(props.id))?<button className='wishlist-btn btns' onClick={e=>{setter(props.id);setRender(!render)}}><span style={{fontSize:'20px'}}>Remove From Wishlist</span></button> : <button className='wishlist-btn btns' onClick={e=>{wishlist.push(Number(props.id));setRender(!render)}}><span style={{fontSize:'20px'}}>Add To Wishlist</span></button>
      }
      </div>
    <div className='product-des'>
    <hr/>
      <div className='product-details'>
      <div className='product-div' onClick={e=>
      {
        animi('product-section');
        setSlide({...slidestate,
                  slide1:slidestate.slide1 ? false : true});
      }}>
      <span>Product Information</span>
      {slidestate.slide1 ? <span><svg xmlns="http://www.w3.org/2000/svg" width="38" height="28" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17 15a1 1 0 0 0 .707-1.707l-5-5a1 1 0 0 0-1.414 0l-5 5A1 1 0 0 0 7 15z" clip-rule="evenodd"/></svg></span> :
      <span><svg xmlns="http://www.w3.org/2000/svg" width="38" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M5.8 9.7L12 16l6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3c-.2.2-.3.4-.3.7s.1.5.3.7"/></svg></span>}
      </div>
        <section className='product-section'>Crafted from the finest grade A cashmere sourced from the Himalayan region, this shawl epitomizes indulgence and sophistication. Its ultra-soft texture and lightweight feel make it a versatile accessory that transitions seamlessly from day to evening wear.
</section>
      </div>
      <hr/>
      <div className='reviews-con'>
      <div className='reviews-div' onClick={e=> {
        animi('review-section');
        setSlide({...slidestate,
                  slide2:slidestate.slide2 ? false : true});
      }}>
      <span>Reviews (20)</span>
      {slidestate.slide2 ? <span><svg xmlns="http://www.w3.org/2000/svg" width="38" height="28" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17 15a1 1 0 0 0 .707-1.707l-5-5a1 1 0 0 0-1.414 0l-5 5A1 1 0 0 0 7 15z" clip-rule="evenodd"/></svg></span> :
      <span><svg xmlns="http://www.w3.org/2000/svg" width="38" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M5.8 9.7L12 16l6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3c-.2.2-.3.4-.3.7s.1.5.3.7"/></svg></span>}
      </div>
        <section className='review-section'>
          <div><h5>Excellent</h5></div>
        </section>
      </div>
      <hr/>
      <div className='address-con'>
      <div className='address-div' onClick={e=> {
        animi('address-section');
        setSlide({...slidestate,
                  slide3:slidestate.slide3 ? false : true});
      }}>
      <span>Delivery & Returns </span>
      {slidestate.slide3 ? <span><svg xmlns="http://www.w3.org/2000/svg" width="38" height="28" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17 15a1 1 0 0 0 .707-1.707l-5-5a1 1 0 0 0-1.414 0l-5 5A1 1 0 0 0 7 15z" clip-rule="evenodd"/></svg></span> :
      <span><svg xmlns="http://www.w3.org/2000/svg" width="38" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M5.8 9.7L12 16l6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3c-.2.2-.3.4-.3.7s.1.5.3.7"/></svg></span>}
      </div>
        <section className='address-section' style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <img src={secure_icon} width='100px' height='90px'></img>
          <img src={genuine_icon} width='65px' height='65px'></img>
          <img src={return_icon} width='100px' height='90px'></img>
        </section>
      </div>
    </div>

    </div>

    </div>
  )
}

export default React.memo(ItemPrev);