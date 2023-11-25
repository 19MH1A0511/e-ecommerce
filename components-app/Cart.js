import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import {Link } from 'react-router-dom';

import './Cart.css';

const Cart = ({cart, setCart}) => {
    // increace qty
    const incqty = (product) => {
        const exsit = cart.find((x) => {
            return x.id == product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id ===product.id ? {...exsit,qty: exsit.qty + 1} : curElm
        }))
    }
        // decrease qty
        const decqty = (product) => {
            const exsit = cart.find((x) => {
                return x.id == product.id
            })
            setCart(cart.map((curElm) => {
                return curElm.id ===product.id ? {...exsit,qty: exsit.qty - 1} : curElm
            }))
        }
    
    // remove cart product
    const removeproduct = (product) => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        if(exsit.qty > 0) {
            setCart(cart.filter((x) => {
                return x.id !== product.id
            }))
        }
    }
    // total price
    const Totalprice = cart.reduce((price,item) => price + item.qty * item.price, 0) 
  return (
    <div>
      <div className='cartcontainer'>
        {cart.length === 0 &&
        <div className='emptycart'>
         <h2 className='empty'>Cart is empty</h2>
         <Link to='./product' className='emptycartbtn'>Shop Now</Link>
         </div>
         }
        <div className='contant'>
            {
                cart.map((curElm) => {
                    return (
                        <div className='cart_item' key={curElm}>
                            <div className='img_box'>
                                <img src={curElm.img} alt={curElm.Title} />
                            </div>
                            <div className='detail' >
                                <div className='info' >
                                <h4>{curElm.cat}</h4>
                                <h3>{curElm.Title}</h3>
                                <p>{curElm.price} </p>
                                <div className='qty'>
                                    <button className='incqty' onClick={()=> incqty()}>+</button>
                                    <input type='text' value = {curElm.qty} />
                                    <button className='decqty' onClick={()=> decqty()}>-</button>
                                </div>
                                
                                <h4 className='subtotal'>sub total: {curElm.price*curElm.qty}</h4>
                                </div>
                                <div className='close' >
                                <button onClick={() => removeproduct(curElm)}><AiOutlineClose /></button>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        {
            cart.length > 0 &&
            <>
             <div className='totalprice'>{Totalprice}</div>
             <button className='checkout'>Checkout</button>
            </>
        }
      </div>
    </div>
  )
}

export default Cart
