import React from 'react'
import './home.css';
import men_banner from '../Assets/home_imgs/img13.webp';
import women_banner from '../Assets/home_imgs/img14.webp';
import data from '../Assets/home_imgs/type';
import {Link} from 'react-router-dom';
import banner1 from '../Assets/home_imgs/img6.webp';
import banner2 from '../Assets/home_imgs/img7.webp';
import banner3 from '../Assets/home_imgs/img8.webp';
import banner4 from '../Assets/home_imgs/img9.jpg';
import banner5 from '../Assets/home_imgs/img1.jpg';
import banner6 from '../Assets/home_imgs/img10.jpg';
import banner7 from '../Assets/home_imgs/img11.webp';
import banner8 from '../Assets/home_imgs/img9.jpg';
import banner9 from '../Assets/home_imgs/img9.jpg';
import banner10 from '../Assets/home_imgs/img4.gif';
import banner11 from '../Assets/home_imgs/img2.jpg';
import banner12 from '../Assets/home_imgs/img3.gif';
import banner13 from '../Assets/home_imgs/img5.webp';
import Slider from '../components/Slider.jsx';
function Home() {
  const imgs_array=[banner2, banner3, banner4];
  const imgs_array2=[banner5, banner6, banner7];
  const imgs_array3=[banner8, banner9,banner10];
  const imgs_array4=[banner11,banner12,banner13];
  const new_data=data.filter(each=>each.id<13)
  return (
    <div className='home-main-con'>
    <div className='banner-con'>

    <Link to='/men'>
    <img src={men_banner} alt='image'/> 
    </Link>
    <Link to='/women'>
    <img src={women_banner} alt='image'/> 
    </Link>
    </div>
    <h3>TRENDING CATEGORIES</h3>
    <div className='type-con'>
          {
            new_data.map(each=>{
              return (
                <React.Fragment  key={each.id}>
                  <img src={each.img} className='type-img'></img>
                </React.Fragment>
              )
            })
          }
    </div>
    <img  className='banner1' src={banner1} alt='banner'></img>
    <div className='home-slider-con'>
    <div>
    <Slider imgs={imgs_array2}/>
    <Slider imgs={imgs_array4}/>
    </div>
    <div>
    <Slider imgs={imgs_array}/>
    <Slider imgs={imgs_array3}/>
    </div>
    </div>
    </div>
  )
}
export default React.memo(Home);