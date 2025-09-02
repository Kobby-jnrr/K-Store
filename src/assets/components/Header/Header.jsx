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
                    <img src={Search} className="search-icon"/>
                </button>   
            </div>

            <div className="right">
                <button className="ham-button">
                    <img src={Ham} className="ham-menu" alt="Menu"/>
                </button>
                <button className="wishlist-button">
                    <img src={Wishlist} className="wishlist"/>
                </button>
                <Link to={"/cartPage"}>
                    <button className="cart-button">
                    <   img src={Cart} className="cart" alt="Cart"/>
                        <p id="cartCount">{totalItems}</p>
                    </button>
                </Link>
                <button className="profile-button">
                    <img src={Profile} className="user-profile" alt="Profile"/>
                </button>
            </div>
        </header>
    );
}

export default Header