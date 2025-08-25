import "./grocery.css";

function Grocery({cart, setCart}) {

  const products = [
    {
    id: 301, 
    title: "Bofrot Mix", 
    price: 299, 
    image: "/grocery/bofrotmix.jpg" 
    },
    { 
    id: 302, 
    title: "Smirnoff", 
    price: 129, 
    image: "/grocery/drink.jpg" 
    },
    { 
    id: 303, 
    title: "Kivo 4 in 1 gari", 
    price: 9, 
    image: "/grocery/gari.jpg" 
    },
    { 
    id: 304, 
    title: "KirkLand Oat", 
    price: 9, 
    image: "/grocery/oat.jpg" 
    },
    { 
    id: 305, 
    title: "Royal Aroma Rice", 
    price: 72.99, 
    image: "/grocery/rice.jpg" 
    },
  ];

  

  const addToCart = (id) => {
    setCart({ ...cart, [id]: 1 });
  };

  const increase = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };

  const decrease = (id) => {
    if (cart[id] > 1) {
      setCart({ ...cart, [id]: cart[id] - 1 });
    } else {
      const newCart = { ...cart };
      delete newCart[id];
      setCart(newCart);
    }
  };

  return (
    <div className="product-list">
      {products.map((item) => (
        <div key={item.id} className="product">
          <img src={item.image} className="pp" alt={item.title} />
          <h4>{item.title}</h4>
          <p>${item.price}</p>

          {!cart[item.id] ? (
            <button className="add-btn" onClick={() => addToCart(item.id)}>
              Add to Cart
            </button>
          ) : (
            <div className="counter">
              <button onClick={() => decrease(item.id)}>-</button>
              <span>{cart[item.id]}</span>
              <button onClick={() => increase(item.id)}>+</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Grocery