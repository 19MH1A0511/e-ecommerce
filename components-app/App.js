import React,{useState} from "react";
// import Loging from "./Loging";
import Nav from ".//nav";
import {BrowserRouter} from 'react-router-dom';
import Rout from "./rout";
import Footer from './footer'
import Product from "./product";
import Productdetail from "./productdetail";
const App = () => {
  // add to cart
  const [cart, setCart] = useState([])
  // product detail
  const [close, setClose] = useState(false);
  const [detail ,setDetail] = useState([]);
  // filter product
  const [product, setProduct] = useState(Productdetail);
  const searchbtn = (Product) => {
    const change = Productdetail.filter((x) => {
      return x.cat === product
    })
     setProduct(change)
  
  }
  // product detail 
  const view = (product) => {
    setDetail([{...product}])
    setClose();  //ture
  }
  // add to cart
  const exsit = cart.find((x) => {
    return x.id === product.id
  })
  const addtocart = (product) => {
   if(exsit) {
    alert('This Product is already added to cart')
   }else {
    setCart([...cart,{...product, qty:1}])
    alert('product is added to cart')
   }
  }
  console.log(cart);
  return (
    <div className="App">
      <BrowserRouter >
      <Nav searchbtn={searchbtn} />
      <Rout product={product} setProduct={setProduct} detail={detail} view={view} colse={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart} />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
