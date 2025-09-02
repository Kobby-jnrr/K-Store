import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./assets/components/Header/Header.jsx";
import Sidebar from "./assets/components/Sidebar/Sidebar.jsx";
import Main from "./assets/pages/Main-body.jsx";
import Footer from "./assets/components/Footer/Footer.jsx";
import LoginPage from "./assets/pages/Login.jsx";
import SignUp from "./assets/pages/Signup.jsx";
import CartPage from "./assets/pages/CartPage.jsx";

function AppLayout({ cart, setCart, totalItems, logout }) {
  const location = useLocation();

  return (
    <>
      <Header totalItems={totalItems} />

      {location.pathname !== "/cartPage" && <Sidebar />}

      <Routes>
        <Route path="/" element={<Main cart={cart} setCart={setCart} />} />
        <Route path="/cartPage" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>

        {location.pathname !== "/cartPage" && <Footer />}
      <button onClick={logout}>Logout</button>
    </>
  );
}

function Store() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState({});

  const logout = () => setUser(null);

  const totalItems = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,  0);


  return (
    <Router>
      {!user ? (
        <Routes>
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
        </Routes>
      ) : (
        <AppLayout
          cart={cart}
          setCart={setCart}
          totalItems={totalItems}
          logout={logout}
        />
      )}
    </Router>
  );
}

export default Store