import React from 'react'
import './salecomp.css';
function Salecomp({imgs}) {
  return (
    <div className='Salecomp-con'>
    <div className='slide-div'>
      <img src={imgs.img1} width='500px' height='500px'/>
      <img src={imgs.img2} width='500px' height='500px'/>
      <img src={imgs.img3} width='500px' height='500px'/>
      <img src={imgs.img4} width='500px' height='500px'/>
    </div>
    </div>
  )
}

export default Salecomp;