import React, { useEffect, useReducer, useState } from 'react'
import "./Header.scss";
import { IoCartOutline } from "react-icons/io5";
import { shallowEqual, useSelector } from 'react-redux';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const itemInCart=useSelector(state=>state?.cart,shallowEqual)
  let itemcount=itemInCart ? itemInCart.length : 0


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    
    <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      
            <p className='rightfit'><span>RIGHT</span>FIT.COM</p>
      
      <ul className="nav-links">
        <li><a href="#" className='allproducts'>All Products</a></li>
        <li><a href="#" className='featured'>Featured Products</a></li>
        <li><a href="#" className='cart'><IoCartOutline /><span>{itemcount}</span></a></li>
       
      </ul>
  </nav>
    
  )
}

export default Header