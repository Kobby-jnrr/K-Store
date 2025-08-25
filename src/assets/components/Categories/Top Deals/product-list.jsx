import "./product-list.css";

function ProductList({cart, setCart}) {

  const products = [
    { 
    id: 0o05, 
    title: "Sneakers", 
    price: 72.99, 
    image: "/fashion/shoe2.jpg" 
    },
    { 
    id: 603, 
    title: "Real Madrid Jersey", 
    price: 599, 
    image: "/sports/madrid.jpg"
    },
    { 
    id: 204, 
    title: "Portable Wadrobe", 
    price: 9, 
    image: "/home/wadrobe.jpg" 
    },
     { 
    id: 502, 
    title: "Makeup Kit", 
    price: 129, 
    image: "/beauty/1 (13).jpg"
    },
    { 
    id: 702, 
    title: "Controller", 
    price: 129, 
    image: "/gaming/gamepad2.jpg" 
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

export default ProductList