<<<<<<< HEAD
import "./Header.css";
import {Link} from "react-router-dom";
import Search from "./head-image/Search.png";
import Ham from "./head-image/interface.png";
import Wishlist from "./head-image/wishlist.png";
import Cart from "./head-image/Cart.png";
import Profile from "./head-image/user.png";
import logo from "./head-image/web-logo.png";


function Header({totalItems}){
    return(
        <header> 
            <div className="left">
                <img src={logo} className="logo"/>
            </div>
            
            <div className="middle">
                <input type="text" className="search" placeholder="Search for products, categories or brands..."/>
                <button className="search-button">
=======
import React,{useState} from "react"
import Product from "../Cart/product-list"
import "./Header.css"
import Search from "./head-image/Search.png"
import Ham from "./head-image/interface.png"
import Wishlist from "./head-image/wishlist.png"
import Cart from "./head-image/Cart.png"
import Profile from "./head-image/user.png"


function Header(){
    return(
        <header> 
            <div className="left">
                K-STORE
            </div>
            
            <div className="middle">
                <input type="text" className="search" placeholder="Search for products, catergories or brands..."/>
                <button class="search-button">
>>>>>>> 478dbc9d59647b8d7d6ed202f44ca5ed8c7d2520
                    <img src={Search} className="search-icon"/>
                </button>   
            </div>

            <div className="right">
<<<<<<< HEAD
                <button className="ham-button">
=======
                <button class="ham-button">
>>>>>>> 478dbc9d59647b8d7d6ed202f44ca5ed8c7d2520
                    <img src={Ham} className="ham-menu" alt="Menu"/>
                </button>
                <button className="wishlist-button">
                    <img src={Wishlist} className="wishlist"/>
                </button>
<<<<<<< HEAD
                <Link to={"/cartPage"}>
                    <button className="cart-button">
                    <   img src={Cart} className="cart" alt="Cart"/>
                        <p id="cartCount">{totalItems}</p>
                    </button>
                </Link>
=======
                <button className="cart-button">
                    <img src={Cart} className="cart" alt="Cart"/>
                    <p id="cartCount">{0}</p>
                </button>
>>>>>>> 478dbc9d59647b8d7d6ed202f44ca5ed8c7d2520
                <button className="profile-button">
                    <img src={Profile} className="user-profile" alt="Profile"/>
                </button>
            </div>
        </header>
    );
}

export default Header