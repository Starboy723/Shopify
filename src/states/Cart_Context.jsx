import React,{useState} from 'react'
export const Cart_Context=React.createContext();
export function Cart_Context_provider({children}){
    const [wishlist,setList]=useState([]);
    const [cart_value,setValue]=useState(0);
    const [cart_arr,setCart]=useState([]);
    function addToCart(id){
      setCart([...cart_arr,id]);
    }
    function removeFromCart(id){
      const newCartArr=cart_arr.filter(each=>each!=id);
      setCart(newCartArr);
    }
    function Incre(){
        setValue(cart_value+1);
    }
    function Decre(){
         setValue(cart_value-1);
    }
    function setter(id){
           setList(wishlist.filter(each=>each!=id));
    }
  return <Cart_Context.Provider value={[cart_value,Incre,Decre,cart_arr,addToCart,removeFromCart,wishlist,setter]}>{children}</Cart_Context.Provider>
}