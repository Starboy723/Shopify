import React,{useContext,useState,useRef} from 'react';
import icon from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png';
import wishlist_icon from '../Assets/images/saved.png';
import './navbar.css';
import { NavLink,Link,useNavigate } from 'react-router-dom';
import {Cart_Context} from '../states/Cart_Context';
import { hoverimages } from '../Assets/hoverimgs';
function onHover(prop){
  document.getElementById(`${prop}`).classList.add('hover');

}
function onOut(prop){
  document.getElementById(`${prop}`).classList.remove('hover');
}
function Navbar() {
  const navigate=useNavigate();
  const [hoverstate,setState]=useState(null);
  const men_imgs=hoverimages.men;
  const women_imgs=hoverimages.women;
  const [cart_value,Incre,Decre,cart_arr,addToCart,removeFromCart]=useContext(Cart_Context);
  return (
    <div className='main-nav-con'>
     <div className='title-con'>
     <h1 className='title'>SHOPIFY</h1>
   {/*  <img src={icon} alt='logo' className='logo-img'></img> */}
</div>
 <div className='routes-container'>
  <NavLink className='routes home' to='/'  onClick={e=>window.scrollTo(0,0)}>HOME</NavLink>
  <NavLink className='routes men' to='/men' onMouseOut={e=>{onOut('men-block');}} onMouseOver={e=>{onHover('men-block');setState('men-block')}} onClick={e=>window.scrollTo(0,0)}>MEN</NavLink>
  <NavLink className='routes women' to='/women' onMouseOut={e=>{onOut('men-block');}} onMouseOver={e=>{onHover('men-block');setState('women-block')}}  onClick={e=>window.scrollTo(0,0)}>WOMEN</NavLink>
  <NavLink className='routes kids' to='/kids' onMouseOut={e=>{onOut('men-block');}} onMouseOver={e=>{onHover('men-block'); setState('kids-block')}} onClick={e=>window.scrollTo(0,0)}>KIDS</NavLink>
 </div>
 <div className='search-con'>
 <input type='text' className='search' placeholder='search'></input>
  <svg className="searchicon" id="searchicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
        </svg>
 </div>
        <div className='cart-con'>
{/*         <button className='inbtn btn'>LOGIN</button>
        <button className='upbtn btn'>SIGN UP</button> */}
{/*        ̥ <svg xmlns="http://www.w3.org/2000/svg" width="30" height="100" viewBox="0 0 37 32"><path fill="currentColor" d="M27 0a9.97 9.97 0 0 0-6.704 2.595A9.97 9.97 0 0 0 18.5 4.749a10 10 0 0 0-1.796-2.155A9.974 9.974 0 0 0 10 0C4.486 0 0 4.486 0 10c0 3.722 1.158 6.66 3.871 9.825c3.942 4.6 13.919 11.62 14.342 11.917a.496.496 0 0 0 .574 0c.423-.297 10.4-7.317 14.343-11.917C35.842 16.66 37 13.722 37 10c0-5.514-4.486-10-10-10m5.371 19.175C28.876 23.251 20.191 29.516 18.5 30.72c-1.691-1.204-10.376-7.469-13.87-11.545C2.085 16.206 1 13.462 1 10c0-4.963 4.038-9 9-9c2.227 0 4.37.829 6.032 2.335a9 9 0 0 1 2.02 2.664c.17.34.726.34.896 0a8.984 8.984 0 0 1 2.02-2.663A8.968 8.968 0 0 1 27 1c4.962 0 9 4.037 9 9c0 3.462-1.085 6.206-3.629 9.175"/></svg>
 */}
     <img src={wishlist_icon} onClick={e=>{navigate('/wishlist');window.scrollTo(0,0)}} style={{cursor:'pointer'}} width='30px' height={'30px'}/>       
 <Link className='cart-logo' to='/cart' onClick={e=>window.scrollTo(0,0)}>
        <div className='inside-cart'>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="35" height="100" viewBox="0 0 32 32"><path fill="currentColor" d="M29.02 11.754L8.416 9.474L7.16 4.715a.758.758 0 0 0-.727-.558H3.34a1.214 1.214 0 0 0-.963-.49a1.24 1.24 0 1 0 0 2.483c.4 0 .738-.2.965-.492h2.512l5.23 19.8a3.282 3.282 0 0 0-.89 2.242a3.29 3.29 0 0 0 3.292 3.293a3.296 3.296 0 0 0 3.297-3.293a3.19 3.19 0 0 0-.093-.743h5.533a3.25 3.25 0 0 0-.092.743c0 1.82 1.476 3.293 3.296 3.293S28.72 29.52 28.72 27.7a3.296 3.296 0 0 0-3.294-3.297c-.95 0-1.8.41-2.402 1.053h-7.136a3.276 3.276 0 0 0-2.402-1.053c-.38 0-.738.078-1.077.196l-.182-.686H26.81a2.5 2.5 0 0 0 2.39-1.96l1.575-7.798a2.17 2.17 0 0 0 .04-.414a1.995 1.995 0 0 0-1.795-1.988zm-3.592 16.24a.298.298 0 0 1-.297-.295c.003-.166.135-.298.298-.298s.295.132.297.297a.298.298 0 0 1-.297.294zm1.78-7.495l.948-.95l-.318 1.58zm-14.453-9.037L13.79 12.5l-1.29 1.29l-1.293-1.29l1.087-1.088zm4.498.498l.538.54l-1.29 1.29l-1.293-1.29l.688-.69l1.358.15zM9.63 14.076l.87-.868l1.29 1.292l-1.29 1.29l-.565-.563l-.304-1.152zm-.295-1.12l-.328-1.24l.785.785zM21.79 16.5l-1.29 1.29l-1.293-1.29l1.292-1.293zm-.583-2l1.292-1.292l1.29 1.292l-1.29 1.292zM18.5 15.79l-1.293-1.29l1.292-1.293l1.29 1.292zm-.71.71l-1.29 1.29l-1.292-1.29l1.292-1.293zm-3.29-.71l-1.293-1.29l1.292-1.293l1.29 1.292zm-.71.71l-1.29 1.29l-1.293-1.29l1.292-1.293zm-3.29.707l1.29 1.292l-.784.783l-.54-2.044l.033-.033zm.802 3.197l1.197-1.197l1.29 1.292l-1.29 1.29l-1.13-1.13zm1.906-1.905l1.29-1.293l1.293 1.292l-1.29 1.29l-1.292-1.29zm3.292.707l1.292 1.292l-1.292 1.29l-1.292-1.29zm.708-.708l1.292-1.293l1.29 1.292l-1.29 1.29zm3.29.707l1.293 1.292l-1.29 1.29l-1.292-1.292zm.71-.708l1.29-1.293l1.293 1.292l-1.29 1.29zm2-2l1.29-1.293l1.293 1.292l-1.29 1.29zm2-2l1.29-1.293L27.79 14.5l-1.29 1.292l-1.293-1.293zm-.71-.708l-1.155-1.156l2.082.23zM21.792 12.5l-1.29 1.292l-1.293-1.292l.29-.29l2.253.25zm-7.29-.71l-.152-.15l.273.03l-.12.12zm-4 .002l-.65-.65l1.17.13zm4 9.415l1.205 1.205h-2.41zm4 0l1.205 1.206h-2.412zm4 0l1.207 1.207h-2.414zm.707-.708l1.292-1.293l1.29 1.292l-1.29 1.29zm2-2l1.292-1.292l1.29 1.29l-1.29 1.293l-1.293-1.29zm3.292-.71l-1.292-1.29l1.29-1.292l.445.444l-.43 2.124l-.014.015zm.5-4.5l-.5.5l-.66-.657l1.017.112c.054.008.1.026.144.044zM13.488 27.993a.297.297 0 0 1 0-.593a.296.296 0 0 1 0 .591zm13.323-5.58h-1.517l1.207-1.207l.93.93c-.187.17-.423.29-.62.277"/></svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="96" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"/></svg>
         <span className='cart-count'>{cart_value}</span>
        </div>
        </Link>
       <Link to='/login'>
        {/* <svg className='usericon' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="70 0 132 232"><path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44.05 44.05 0 0 1 44 44m60 8A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88.09 88.09 0 0 0-91.47-87.93C77.43 41.89 39.87 81.12 40 128.25a87.65 87.65 0 0 0 22.24 58.16A79.71 79.71 0 0 1 84 165.1a4 4 0 0 1 4.83.32a59.83 59.83 0 0 0 78.28 0a4 4 0 0 1 4.83-.32a79.71 79.71 0 0 1 21.79 21.31A87.62 87.62 0 0 0 216 128"/></svg> */}
        <svg className='usericon' xmlns="http://www.w3.org/2000/svg" width="40" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a5 5 0 1 1-5 5l.005-.217A5 5 0 0 1 12 2m2 12a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5z"/></svg>
       </Link>
        </div>
        <HoverComp state={hoverstate} />
      </div>
  )
}
function HoverComp({state}){
  const navigate=useNavigate();
  let imgs=hoverimages.men;
  let page=null;
  if(state=='men-block')
    {
      page='men';
    imgs=hoverimages.men;
    }
    else if(state=='women-block')
      {
        page='women'
         imgs=hoverimages.women;
      }
    else{
      page='kids'
        imgs=hoverimages.kids;
      }
  return (
<div className='men-hover' id='men-block' onMouseOut={e=>onOut('men-block')} onMouseOver={e=>{onHover('men-block')}}>
<div className="main-container" onClick={e=>navigate(`/${page}`)}>
  <div>
    <div className="con" >
      <img src={imgs[0].img} alt="img" width="304px" />
    <div className="title-divs"><span>{imgs[0].title}</span></div>
    </div>
    <div style={{display:"flex",gap:"5px"}}>
      <div style={{position:"relative"}} >
        <img src={imgs[1].img} width='150px'/>
        <div className="title-divs"><span>{imgs[1].title}</span></div>
      </div>
      <div style={{position:"relative"}}>
        <img src={imgs[2].img} width="150px"/>
        <div className="title-divs"><span>{imgs[2].title}</span></div>
      </div>
    </div>
  </div>
  <div>
    <div>
      <img src={imgs[3].img} width="150px"/>
      <div className="title-divs"><span>{imgs[3].title}</span></div>
    </div>
    <div>
      <img src={imgs[4].img} width="150px"/>
      <div className="title-divs"><span> {imgs[4].title}</span></div>
    </div>
    <div>
      <img src={imgs[5].img} width="150px"/>
      <div className="title-divs"><span>{imgs[5].title}</span></div>
    </div>
  </div>
  <div >
    <div style={{display:'flex',gap:'5px'}}>
      <div style={{position:'relative' }}>
        <img src={imgs[6].img}  width="150px"/>
        <div className="title-divs"><span>{imgs[6].title}</span></div>
      </div>
      <div style={{position:"relative" }}>
        <img src={imgs[7].img} width="150px"/>
        <div className="title-divs"><span >{imgs[7].title}</span></div>
      </div>
    </div>
    <div>
      <img src={imgs[8].img} width="300px"/>
      <div className="title-divs"><span>{imgs[8].title}</span></div>
    </div>
  </div>
</div>
</div>
  )
}

export default React.memo(Navbar);