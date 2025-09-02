import "./Sidebar.css"
import cat from "./side-image/category.png"
import fashion from "./side-image/fashion.png"
import electronics from "./side-image/responsive.png"
import home from "./side-image/home.png"
import grocery from "./side-image/restaurant.png"
import baby from "./side-image/baby.png"
import beauty from "./side-image/skin-care.png"
import sports from "./side-image/sports.png"
import gaming from "./side-image/console.png"
import tools from "./side-image/support.png"
import health from "./side-image/healthcare.png"


function Sidebar(){
    return(
        <aside className="sidebar">
<<<<<<< HEAD
            <div className="main-body"> 
=======
            <div class="main-body"> 
>>>>>>> 478dbc9d59647b8d7d6ed202f44ca5ed8c7d2520
                    <div className="head-container">
                        <div className="side-head">Categories</div>
                    </div>
                    <div className="container">
                        <img src={fashion} className="side"/>
                        <a href="#fashion">Fashion and Apparel</a>
                    </div>

                    <div className="container">
                        <img src={electronics} className="side"/>
                        <a href="#electronics">Electronics</a>
                    </div>

                    <div className="container">
                        <img src={home} className="side"/>
                        <a href="#home-living">Home and Living</a>
                    </div>

                    <div className="container">
                        <img src={grocery} className="side"/>
                        <a href="#grocery">Grocery and Essentials</a>
                    </div>

                    <div className="container">
                        <img src={baby} className="side"/>
                        <a href="#baby">Baby and Kids</a>
                    </div>

                    <div className="container">
                        <img src={beauty} className="side"/>
                        <a href="#beauty">Beauty and Personal Care</a>
                    </div>

                    <div className="container">
                        <img src={sports} className="side"/>
                        <a href="#sports">Sports and Outdoors</a>
                    </div>

                    <div className="container">
                        <img src={gaming} className="side"/>
                        <a href="#gaming">Gaming</a>
                    </div>

                    <div className="container">
                        <img src={tools} className="side"/>
                        <a href="#tools">Tools and Automative</a>
                    </div>

                    <div className="container">
                        <img src={health} className="side"/>
<<<<<<< HEAD
                        <a href="#health">Health Care</a>
=======
                        <a href="">Health Care</a>
>>>>>>> 478dbc9d59647b8d7d6ed202f44ca5ed8c7d2520
                    </div>
            </div>
    </aside>
    );
}

export default Sidebar