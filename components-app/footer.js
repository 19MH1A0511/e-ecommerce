import React from 'react'
import {RiFacebookFill} from 'react-icons/ri';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {AiFillYoutube} from 'react-icons/ai';
import './footer.css';

 const Footer = () => {
  return (
    <div>
      <div className='footer' >
        <div className='container' >
            <div className='about' >
                <div className='logo' >
                    <img src='...' />
                </div>
                <div className='detail' >
                    <p>we are a term of designers and developers that create high quality wordPress</p>
                    <div className='icon' >
                        <li><RiFacebookFill /> </li>
                        <li><AiOutlineInstagram /></li>
                        <li>< BsTwitter/></li>
                        <li> < AiFillYoutube/></li>
                    </div>
                </div>
            </div>
            <div className='account' >
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Condition</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;