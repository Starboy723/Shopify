import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
/* import Home from './pages/Home'; */
/* import Mens from './pages/Mens'; */
/* import Womens from './pages/Womens';
import Kids from './pages/Kids';
import Cart from './pages/Cart';
import Login from './pages/Login'; */
/* import<React.Suspense> ItemComp from './components<React.Suspense>/ItemComp'; */
import Footer  from './components/Footer';
/* import Wishlist from './components/Wishlist.jsx'; */
const Home = React.lazy(()=>import('./pages/Home'));
const Men=React.lazy(()=>import('./pages/Mens'));
const ItemComp=React.lazy(()=>import('./components/ItemComp'));
const Women = React.lazy(()=>import('./pages/Womens'));
const Kids=React.lazy(()=>import('./pages/Kids'));
const Wishlist=React.lazy(()=>import('./components/Wishlist.jsx'))
const Cart= React.lazy(()=>import('./pages/Cart'));
const Login=React.lazy(()=>import('./pages/Login'));
function App() {
return(
  <div>
  <Navbar/>
  <Routes>
    <Route path='/' element={<React.Suspense fallback={<div class="loader"></div>}><Home/></React.Suspense>}></Route>
    <Route path='/men' element={<React.Suspense fallback={<div class="loader"></div>}><Men/></React.Suspense>}></Route>
    <Route path='/women' element={<React.Suspense fallback={<div class="loader"></div>}><Women/></React.Suspense>}></Route>
    <Route path='/kids' element={<React.Suspense fallback={<div class="loader"></div>}><Kids/></React.Suspense>}></Route>
    <Route path='/cart' element={<React.Suspense fallback={<div class="loader"></div>}><Cart/></React.Suspense>}></Route>
    <Route path='/login' element={<React.Suspense fallback={<div class="loader"></div>}><Login/></React.Suspense>}></Route>
   ̥̥̥ <Route path='/men/:id' element={<React.Suspense fallback={<div class="loader"></div>}><ItemComp/></React.Suspense>}></Route>
   ̥̥̥ <Route path='/women/:id' element={<React.Suspense fallback={<div class="loader"></div>}><ItemComp/></React.Suspense>}></Route>
   ̥̥̥ <Route path='/kid/:id' element={<React.Suspense fallback={<div class="loader"></div>}><ItemComp/></React.Suspense>}></Route>
   <Route path='/wishlist' element={<React.Suspense fallback={<div class="loader"></div>}><Wishlist/></React.Suspense>}></Route>
    <Route path='*' element={<center>404 NOT FOUND</center>}></Route>
  </Routes>
  <Footer/>
  </div>
)
}
export default App;
