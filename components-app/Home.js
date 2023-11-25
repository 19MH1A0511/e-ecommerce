import React from "react";
import Homeproduct from "./homeproduct";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { CiPercent } from 'react-icons/ci';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiHeadphone } from 'react-icons/bi';

import "./Home.css";

const Home = ({detail, view ,close, setClose, addtocart }) => {
   return(
        <div>
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
            <div className="top_banner" >
                <div className="container" >
                    <div className="detail" >
                        <h2>The Best Note Book collectation 2023</h2>

                        <Link to='/Product' className="link" >Shop Now <BsArrowRight /></Link>

                    </div>
                    <div className="img_box" >
                        <img src='https://cdn.dribbble.com/users/1595790/screenshots/6714075/banners-e-commerce.jpg' height={300} width={600}  alt='Solider'></img>
                    </div>
                </div>
            </div>
            <div className="product_type">
                <div className="container">
                    <div className="box">
                        <div className="img_box" >
                            <img src="https://i.gadgets360cdn.com/products/large/vivo-t2-5g-db-709x800-1681200173.jpg" alt='mobile' />
                        </div>
                        <div className='detail'>
                            <p>23 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box" >
                            <img src='https://www.jiomart.com/images/product/original/493664716/fire-bolt-unity-bsw092-smart-watch-black-digital-o493664716-p597514267-0-202301121007.jpeg?im=Resize=(420,420)' alt='watchs' />
                        </div>
                        <div className='detail'>
                            <p>18 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box" >
                            <img src='https://www.gizmochina.com/wp-content/uploads/2020/03/vivo_tws_earphone-.png' alt='earsphone' />
                        </div>
                        <div className='detail'>
                            <p>52 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box" >
                            <img src='https://m.media-amazon.com/images/I/71olYvEpf0L.jpg' alt='soft toys' />
                        </div>
                        <div className='detail'>
                            <p>63 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box" >
                            <img src='https://www.havells.com/HavellsProductImages/HavellsIndia/Content/Consumer/personal-grooming/Male-Grooming/Beard-Trimmer/BT5171C/cover.png' alt='Trimmers' />
                        </div>
                        <div className='detail'>
                            <p>23 products</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box" >
                            <img src='https://4.imimg.com/data4/TF/LE/MY-13077791/colour-printer.jpg' alt='printer' />
                        </div>
                        <div className='detail'>
                            <p>42 products</p>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>

            <div className="about">
                <div className="container">
                    <div className="box">
                        <div className="icon">
                            <FiTruck />
                        </div>
                        <div className="detail">
                            <h3>Free shipping</h3>
                            <p>order above 1000Rs</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FiTruck />
                        </div>
                        <div className="detail">
                            <h3>Return  & Refund</h3>
                            <p>Money Back Gaurenty</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <CiPercent />
                        </div>
                        <div className="detail">
                            <h3>Member Discount</h3>
                            <p>on every order</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <BiHeadphone />
                        </div>
                        <div className="detail">
                            <h3>Customer support</h3>
                            <p>Every Time call support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <h2>Top products</h2>
                <div className="container" >
        
                        {
                            Homeproduct.map((curElm) => 
                            {
                                return(
                                    <div>
                                        <div className="box" key={curElm.id}>
                                            <div className="img_box" >
                                                <img src={curElm.Img} alt={curElm.Title} />
                                                <div className="icon" >
                                                    <li onClick={() => addtocart(curElm)}>< AiOutlineShoppingCart /></li>
                                                    <li onClick={() => view()}>< BsEye /></li>
                                                    <li><AiOutlineHeart /></li>                                                       
                                                </div>
                                            </div>
                                            <div className="detail"></div>
                                            <p>{curElm.cat}</p>
                                            <h3>{curElm.Title}</h3>
                                            <h4>{curElm.price} </h4>
                                        </div>
                                    </div>

                                )
                            })
                        }        
                </div>
            </div>
            <div className="banner">
                <div className="container" >
                <div className="detail">
                    <h4>LATEST TECHOLOGY ADDED</h4>
                    <h3>Apple ipad 10.2 9th Gen - 2023 </h3>
                    <p>45000.00</p>
                    <Link to='/product' className="link">Shop Now<BsArrowRight /></Link>
                </div>
                <div className="img_box">
                    <img src='https://www.ixpressonline.com/wp-content/uploads/2020/09/ipad-9th-gen-lineup.png' height={500} width={800} alt= 'slidering' />
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default Home;