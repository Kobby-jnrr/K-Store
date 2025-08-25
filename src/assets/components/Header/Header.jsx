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
                    <img src={Search} className="search-icon"/>
                </button>   
            </div>

            <div className="right">
                <button class="ham-button">
                    <img src={Ham} className="ham-menu" alt="Menu"/>
                </button>
                <button className="wishlist-button">
                    <img src={Wishlist} className="wishlist"/>
                </button>
                <button className="cart-button">
                    <img src={Cart} className="cart" alt="Cart"/>
                    <p id="cartCount">{0}</p>
                </button>
                <button className="profile-button">
                    <img src={Profile} className="user-profile" alt="Profile"/>
                </button>
            </div>
        </header>
    );
}

export default Header