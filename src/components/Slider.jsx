import React from 'react'
import './slider.css';
function Slider(props) {
  return (
    <div className='slider-con'>
       {
        props.imgs.map(each=>{
            return (
                <>
                    <img src={each} className='slider-img'/>
                </>
            )
        })
       }
    </div>
  )
}

export default React.memo(Slider);