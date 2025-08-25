import "./Main-body.css"
import ProductList from "../components/Categories/Top Deals/product-list"
import Fashion from "../components/Categories/Fashion/fashion";
import Electronics from "../components/Categories/Electronics/electronics";
import Home from "../components/Categories/Home/home";
import Grocery from "../components/Categories/Grocery/grocery";
import Baby from "../components/Categories/Baby/baby";
import Beauty from "../components/Categories/Beauty/beauty";
import Sports from "../components/Categories/Sports/sports";
import Gaming from "../components/Categories/Gaming/gaming";

function Main({cart, setCart}){
   
    return(
        <main className="main">
        <div className="promo">
            🎉 Black Friday Mega Sale!! 🎉
            <span>Grab your deal now!!!!!!</span>
            <div className="countdown" id="countdown"></div>
        </div>
        <section id="deals" className="deals">
            <h2>Top Deals</h2>
            <ProductList cart = {cart} setCart={setCart}/>
        </section>

        <section id="fashion">
            <h2>Fashion and Apparel</h2>
            <Fashion cart = {cart} setCart={setCart}/>
        </section>

         <section id="electronics">
            <h2>Electronics</h2>
            <Electronics cart = {cart} setCart={setCart}/>
        </section>

         <section id="home-living">
            <h2>Home and Living</h2>
            <Home cart = {cart} setCart={setCart}/>
        </section>

         <section id="grocery">
            <h2>Grocery and Essentials</h2>
            <Grocery cart = {cart} setCart={setCart}/>
        </section>

         <section id="baby">
            <h2>Baby and Kids</h2>
            <Baby cart = {cart} setCart={setCart}/>
        </section>

         <section id="beauty">
            <h2>Beauty and Personal Care</h2>
            <Beauty cart = {cart} setCart={setCart}/>
        </section>

         <section id="sports">
            <h2>Sports and Outdoor</h2>
            <Sports cart = {cart} setCart={setCart}/>
        </section>

         <section id="gaming">
            <h2>Gaming</h2>
            <Gaming cart = {cart} setCart={setCart}/>
        </section>

         <section id="tools">
            <h2>Tools and Automative</h2>
            <div className="product-list">
                <div className="product">
                    <img src="/fashion/shoe1.jpg" className="pp" alt="product"/>
                    <h4>Dress</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/fashion/shoe1.jpg" className="pp" alt="product"/>
                    <h4>Dress</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/fashion/shoe1.jpg" className="pp" alt="product"/>
                    <h4>Dress</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/fashion/shoe1.jpg" className="pp" alt="product"/>
                    <h4>Dress</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/fashion/shoe1.jpg" className="pp" alt="product"/>
                    <h4>Dress</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/fashion/shoe1.jpg" className="pp" alt="product"/>
                    <h4>Dress</h4>
                    <p>$299</p>
                </div>
            </div>
        </section>
        
    </main>
    );
}

export default Main