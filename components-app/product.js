import React from 'react'
import Productdetail from './productdetail';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";

import './Product.css';

const Product = ({product, setProduct , detail, view ,close, setClose, addtocart}) => {
   

    const {loginWithRedirect , isAuthenticated} = useAuth0();


    const filtterproduct = (product) => {
        const update = Productdetail.filter((x) => {
          return  x.cat === product;
        })
        setProduct(update);
    }
    const AllProducts = () => {
        setProduct(Productdetail)
    }
   
  return (
    <>
        {
            close ?
            <div className='product_detail' >
            <div className='container' >
                <button onClick={() => setClose(false)} className='colsebtn'><AiOutlineCloseCircle /></button>
                {
                    detail.map((curElm) =>{
                            return(
                                <div className='productbox' >
                                    <div className='img-box' >
                                        <img src={curElm.Img} alt={curElm.Title} />
                                    </div>
                                    <div className='detail' >
                                    <h2>{curElm.cat}</h2>
                                        <h4>{curElm.Title}</h4>
                                        <p>A screen Everyone will Love: Whether your family is streaming or chating with friends tablet A8....</p>
                                        <h3>{curElm.price}</h3>
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                            )
                    })
                }
                <div className='productbox' ></div>
            </div>
        </div> : null
        }
       
                <div className='productbox' ></div>
           
        
      <div className='products'>
      <h2># Products</h2>
        <p>Home . Product</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>Categories</h3>
                    <ul>
                        <li onClick={() => AllProducts ()}>All Products</li>
                        <li onClick={() => filtterproduct ('Tablet')}>Tablet</li>
                        <li onClick={() => filtterproduct ('Camera')}>Camera</li>
                        <li onClick={() => filtterproduct ('T-Shirt')}>T-Shirt</li>
                        <li onClick={() => filtterproduct ('Shoes')}>Shoes</li>
                        <li onClick={() => filtterproduct ('Home Appliances')}>Home Appliances</li>
                        <li onClick={() => filtterproduct ('books')}>books</li>
                        <li onClick={() => filtterproduct ('Pants')}>Pants</li>
                        <li onClick={() => filtterproduct ('Power Bank')}>Power Bank</li>
                        <li onClick={() => filtterproduct ('Phone Case')}>Phone Case</li>
                        <li onClick={() => filtterproduct ('Tablet')}>Tablet</li>
                    </ul>
                </div>
                </div>
                <div className='productbox' >
                    <div className='contant' >
                        {
                            product.map((curElm) => {
                                return(
                                    <>
                                    <div className="box" key={curElm.id}>
                                            <div className="img_box" >
                                                <img src={curElm.Img} alt={curElm.Title} />
                                                <div className="icon" >
                                                    {
                                                        isAuthenticated ?
                                                        <li onClick={() => addtocart (curElm)} >< AiOutlineShoppingCart /></li>
                                                        :
                                                        <li onClick={() => loginWithRedirect (curElm)} >< AiOutlineShoppingCart /></li>

                                                    }
                                                    <li onClick={() => addtocart (curElm)} >< AiOutlineShoppingCart /></li>
                                                    <li onClick={() => view(curElm)}>< BsEye /></li>
                                                    <li><AiOutlineHeart /></li>                                                       
                                                </div>
                                            </div>
                                            <div className="detail"></div>
                                            <p>{curElm.cat}</p>
                                            <h3>{curElm.Title}</h3>
                                            <h4>{curElm.price} </h4>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            
        </div>
      </div>
    </>
  )
}

export default Product;
