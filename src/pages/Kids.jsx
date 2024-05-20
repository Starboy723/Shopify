import React from 'react';
import bannerimg1 from '../Assets/banner_kids.png';
import './Kids.css';
import Imgcomp from './Imgcomp';
import data from '../Assets/all_product';
import Salecomp from '../components/Salecomp';
import saleimg1 from '../Assets/home_imgs/img51.jpg';
import saleimg2 from '../Assets/home_imgs/img52.jpg';
import saleimg3 from '../Assets/home_imgs/img53.webp';
import saleimg4 from '../Assets/home_imgs/img55.webp';
function Kids() {
  const imgsobj={img1:saleimg1,img2:saleimg2,img3:saleimg3,img4:saleimg4};
  const stock_data=data.filter(each=>each.category=='kid');
  return (
    <div className='kids-main-con'>
    <Salecomp imgs={imgsobj}/>
    <Imgcomp wrap={'wrap'} data={stock_data}/>
    </div>
  )
}

export default React.memo(Kids);