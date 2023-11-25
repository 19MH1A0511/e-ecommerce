import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import Product from './product';
import Contact from './contact';
import Cart from './Cart';

const Rout = ({product, setProduct, detail, view, close ,setClose, cart,setCart}) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} setCart={setCart}  />} />
                <Route path = '/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} setCart={setCart} />} /> 
                <Route path ='/Cart' element={<Cart cart={cart} setCart={setCart} />} />
                <Route path='/contact' element={< Contact />} />
            </Routes>

        </div>
    )
}
export default Rout;