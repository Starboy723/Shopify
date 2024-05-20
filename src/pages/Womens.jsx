import React from 'react'
import data from '../Assets/all_product';
import Imgcomp from './Imgcomp';
import './womens.css';
import sale_img from '../Assets/home_imgs/img32.avif';
import Salecomp from '../components/Salecomp';
import saleimg1 from '../Assets/home_imgs/img46.webp';
import saleimg2 from '../Assets/home_imgs/img47.webp';
import saleimg3 from '../Assets/home_imgs/img11.webp';
import saleimg4 from '../Assets/home_imgs/img50.webp';
import banner from '../Assets/home_imgs/banner.webp';
function Womens() {
  const imgsobj={img1:saleimg1,img2:saleimg2,img3:saleimg3,img4:saleimg4};
  const stock_data=data.filter(each=>each.category=='women');
  return (
    <div className='womens-main-con'>
     <Salecomp imgs={imgsobj}/>
     <img src={banner} ></img>
     <Imgcomp wrap={'wrap'}  data={stock_data}/>
    </div>
  )
}

export default React.memo(Womens)