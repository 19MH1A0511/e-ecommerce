import React, { useState } from 'react';
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {CiLogin} from 'react-icons/ci';
import {CiLogout} from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react";


import './nav.css';

const Nav = (searchbtn) => {
    const [search, setSearch] = useState();

    const { loginWithRedirect , logout, user, isAuthenticated} = useAuth0();


    return (
        <div>
            <div className='free'>


                <div className='icon'><FaTruckMoving /></div>
                <p>
                    Free Shiping when shopping upto 1000
                </p>
            </div>
            <div className='main_header'>
                <div className='container'>
                    <div className='logo'>
                        <img src='./img/logo.svg' alt='logo' />
                    </div>
                    <div className='search_box'>
                        <input type='text' value={search} placeholder='Enter The Product Name' autoComplete='off' onChange={(e) => setSearch(e.target.value)} />
                        <button onClick={() => searchbtn (search)}>Search</button>
                    </div>
                    <div className='icon'>
                        {
                            isAuthenticated && 
                            (
                                <div className='account'>
                            <div className='User_icon'>
                                <AiOutlineUser />
                            </div>
                            <p>Hello, {user.name}</p>
                        </div>

                            )
                        }
                        
                        <div className='second_icon'>
                            <Link to='/' className='link'><AiOutlineHeart /></Link>
                            <Link to='/cart' className='link'><BsBagCheck /></Link>

                        </div>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/product'>Product</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>contact</Link>
                        </li>
                        
                    </ul>
                    </div>
                    
                    <div className='auth'>
                        {
                           isAuthenticated ?
                           <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button> 
                         :
                           <button onClick={() => loginWithRedirect()}><CiLogin /></button> 
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;