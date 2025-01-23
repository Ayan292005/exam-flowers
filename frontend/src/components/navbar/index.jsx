import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { favoritesContext } from '../../context/FavsContext';

function Navbar() {
    let {favorites,setFavorites}=useContext(favoritesContext)
  return (
    <div className='cont'>
       <div className="navbar">
       <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="" />
       <div className='nav-menu'><FaBars /></div>
        <div className="links">
        <NavLink to="" >Home</NavLink>
        <NavLink to="/flowers">Products</NavLink>
        <NavLink to="/add">Add</NavLink>
        <NavLink to="/favorites"style={{fontSize:"20px"}}><CiHeart /><span>{favorites.length}</span></NavLink>
        </div>
       </div>
    </div>
  )
}

export default Navbar