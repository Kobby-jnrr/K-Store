import "./Main-body.css"
import Product from "../components/Cart/product-list"

function Main(){
   
    return(
        <main className="main">
        <div className="promo">
            🎉 Black Friday Mega Sale!! 🎉
            <span>Grab your deal now!!!!!!</span>
            <div className="countdown" id="countdown"></div>
        </div>
        <section id="deals" className="deals">
            <h2>Top Deals</h2>
            <Product/>
        </section>

        <section id="fashion">
            <h2>Fashion and Apparel</h2>
            <div className="product-list">
                <div className="product">
                    <img src="/fashion/dress1.jpg" className="pp" alt="product"/>
                    <h4>Dress</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/fashion/dress2.jpg" className="pp" alt="product"/>
                    <h4>Dress</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/fashion/shoe2.jpg" className="pp" alt="product"/>
                    <h4>Sneaker</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/fashion/shoe8.jpg" className="pp" alt="product"/>
                    <h4>Sneaker</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/fashion/white.jpg" className="pp" alt="product"/>
                    <h4>White Shirt</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/fashion/shoe5.jpg" className="pp" alt="product"/>
                    <h4>Sneaker</h4>
                    <p>$299</p>
                </div>
            </div>
        </section>

         <section id="electronics">
            <h2>Electronics</h2>
            <div className="product-list">
                <div className="product">
                    <img src="/electronics/fridge.jpg" className="pp" alt="product"/>
                    <h4>Fridge</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/electronics/tv1.jpg" className="pp" alt="product"/>
                    <h4>Asana TV</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/electronics/laptop1.jpg" className="pp" alt="product"/>
                    <h4>Window Laptop</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/electronics/projector.jpg" className="pp" alt="product"/>
                    <h4>Projector</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/electronics/mifi.jpg" className="pp" alt="product"/>
                    <h4>Mi-fi</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/electronics/itel.jpg" className="pp" alt="product"/>
                    <h4>Itel City 100</h4>
                    <p>$299</p>
                </div>
            </div>
        </section>

         <section id="home-living">
            <h2>Home and Living</h2>
            <div className="product-list">
                <div className="product">
                    <img src="/home/bedsheet.jpg" className="pp" alt="product"/>
                    <h4>Bedsheet</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/home/couch.jpg" className="pp" alt="product"/>
                    <h4>Couch</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/home/Lap2.jpg" className="pp" alt="product"/>
                    <h4>Laptop Stand</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/home/Laptop Stand.jpg" className="pp" alt="product"/>
                    <h4>Laptop Stand</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/home/wadrobe.jpg" className="pp" alt="product"/>
                    <h4>Portable Wadrobe</h4>
                    <p>$299</p>
                </div>
            </div>
        </section>

         <section id="grocery">
            <h2>Grocery and Essentials</h2>
            <div className="product-list">
                <div className="product">
                    <img src="/grocery/drink.jpg" className="pp" alt="product"/>
                    <h4>Smirnoff</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/grocery/bofrotmix.jpg" className="pp" alt="product"/>
                    <h4>Bofrot Mix</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/grocery/gari.jpg" className="pp" alt="product"/>
                    <h4>Kivo Gari</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/grocery/oat.jpg" className="pp" alt="product"/>
                    <h4>KirkLand Oat</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/grocery/rice.jpg" className="pp" alt="product"/>
                    <h4>Royal Aroma Rice</h4>
                    <p>$299</p>
                </div>
            </div>
        </section>

         <section id="baby">
            <h2>Baby and Kids</h2>
            <div className="product-list">
                <div className="product">
                    <img src="/baby/babynet.jpg" className="pp" alt="product"/>
                    <h4>Baby Net</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/baby/babypack.jpg" className="pp" alt="product"/>
                    <h4>Baby Pack</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/baby/diaper.jpg" className="pp" alt="product"/>
                    <h4>Diaper</h4>
                    <p>$299</p>
                </div>
                 <div className="product">
                    <img src="/baby/babynet.jpg" className="pp" alt="product"/>
                    <h4>Baby Net</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/baby/babypack.jpg" className="pp" alt="product"/>
                    <h4>Baby Pack</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/baby/diaper.jpg" className="pp" alt="product"/>
                    <h4>Diaper</h4>
                    <p>$299</p>
                </div>
            </div>
        </section>

         <section id="beauty">
            <h2>Beauty and Personal Care</h2>
            <div className="product-list">
                <div className="product">
                    <img src="/beauty/1 (13).jpg" className="pp" alt="product"/>
                    <h4>Dress</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/beauty/Nivea Body Lotion.jpg" className="pp" alt="product"/>
                    <h4>Nivea Body Lotion</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/beauty/Nivea 2.jpg" className="pp" alt="product"/>
                    <h4>Nivea Body Lotion</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/beauty/1 (13).jpg" className="pp" alt="product"/>
                    <h4>Dress</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/beauty/Nivea Body Lotion.jpg" className="pp" alt="product"/>
                    <h4>Nivea Body Lotion</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/beauty/Nivea 2.jpg" className="pp" alt="product"/>
                    <h4>Nivea Body Lotion</h4>
                    <p>$299</p>
                </div>
            </div>
        </section>

         <section id="sports">
            <h2>Sports and Outdoor</h2>
            <div className="product-list">
                <div className="product">
                    <img src="/sports/arsenal.jpg" className="pp" alt="product"/>
                    <h4>Arsenal Jersey</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/sports/madrid.jpg" className="pp" alt="product"/>
                    <h4>Real Madrid Jersey</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/sports/basketball.jpg" className="pp" alt="product"/>
                    <h4>Basketball</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/sports/skippingrope.jpg" className="pp" alt="product"/>
                    <h4>Skipping Rope</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/sports/liverpool.jpg" className="pp" alt="product"/>
                    <h4>Liverpool Jersey</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/sports/completejersey.jpg" className="pp" alt="product"/>
                    <h4>Complete Jersey</h4>
                    <p>$299</p>
                </div>
            </div>
        </section>

         <section id="gaming">
            <h2>Gaming</h2>
            <div className="product-list">
                <div className="product">
                    <img src="/gaming/gamepad.jpg" className="pp" alt="product"/>
                    <h4>Gaming Controller</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/gaming/gamepad2.jpg" className="pp" alt="product"/>
                    <h4>Gaming Controller</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/gaming/gamepad.jpg" className="pp" alt="product"/>
                    <h4>Gaming Controller</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/gaming/gamepad2.jpg" className="pp" alt="product"/>
                    <h4>Gaming Controller</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/gaming/gamepad.jpg" className="pp" alt="product"/>
                    <h4>Gaming Controller</h4>
                    <p>$299</p>
                </div>
                <div className="product">
                    <img src="/gaming/gamepad2.jpg" className="pp" alt="product"/>
                    <h4>Gaming Controller</h4>
                    <p>$299</p>
                </div>
            </div>
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