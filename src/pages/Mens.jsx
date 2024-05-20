import React,{useContext} from 'react'
import data from '../Assets/all_product';
import Imgcomp from './Imgcomp';
import './mens.css';
import { Link } from 'react-router-dom';
import sale_img from '../Assets/home_imgs/img35.avif';
import Salecomp from '../components/Salecomp.jsx';
import heroimg from '../Assets/home_imgs/img44.webp'
import heroimg2 from '../Assets/home_imgs/img43.webp'
import heroimg3 from '../Assets/home_imgs/img45.webp'
import heroimg4 from '../Assets/home_imgs/img41.webp'
import banner from '../Assets/home_imgs/banner.webp';
function Mens() {
  const imgs={img1:heroimg,img2:heroimg2,img3:heroimg3,img4:heroimg4};
  const stock_data=data.filter(each=>each.category=='men');
  return (
    <div className='mens-main-con'>
    {/* <img src={sale_img} className='sale_img' /> */}
    <Salecomp imgs={imgs}/>
    <img src={banner} ></img>
      <Imgcomp wrap={'wrap'}  data={stock_data}/>
    </div>
  )
}

export default React.memo(Mens);