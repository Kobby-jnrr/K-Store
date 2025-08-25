import "./fashion.css";

function Fashion({cart, setCart}) {

  const products = [
    {
    id: 0o01, 
    title: "Colorful Dress", 
    price: 299, 
    image: "/fashion/dress1.jpg" 
    },
    { 
    id: 0o02, 
    title: "Polyester Dress", 
    price: 129, 
    image: "/fashion/dress2.jpg" 
    },
    { 
    id: 0o03, 
    title: "Shirts", 
    price: 599, 
    image: "/fashion/shirts.jpg" 
    },
    { 
    id: 0o04, 
    title: "Balance Canvas", 
    price: 9, 
    image: "/fashion/shoe1.jpg" 
    },
    { 
    id: 0o05, 
    title: "Sneakers", 
    price: 72.99, 
    image: "/fashion/shoe2.jpg" 
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

export default Fashion