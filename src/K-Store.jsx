import React, {useState} from "react"
import Header from "./assets/components/Header/Header.jsx"
import Sidebar from "./assets/components/Sidebar/Sidebar.jsx"
import Main from "./assets/pages/Main-body.jsx"
import Footer from "./assets/components/Footer/Footer.jsx"
import LoginPage from "./assets/pages/Login.jsx"

function Store() {
    const[user, setUser] = useState(null);
    const logout = () => {
        setUser(null);
    };
    const [cart, setCart] = useState({});
    const totalItems = Object.values(cart).reduce((sum, quantity) =>  sum + quantity, 0);

  return(
    <>{!user ? (<LoginPage setUser={setUser}/>):(
        <>
        <Header totalItems={totalItems}/>
        <Sidebar/>
        <Main cart={cart} setCart={setCart}/>
        <Footer/>
        <button onClick={logout}>Logout</button>
        </>
    )}
    </>
  );
}

export default Store
