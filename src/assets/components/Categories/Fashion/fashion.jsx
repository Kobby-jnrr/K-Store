import "./fashion.css";

function Fashion({cart, setCart}) {

  const products = [
    {
    id: 1, 
    title: "Colorful Dress", 
    price: 299, 
    image: "/fashion/dress1.jpg" 
    },
    { 
    id: 2, 
    title: "Polyester Dress", 
    price: 129, 
    image: "/fashion/dress2.jpg" 
    },
    { 
    id: 3, 
    title: "Shirts", 
    price: 599, 
    image: "/fashion/shirts.jpg" 
    },
    { 
    id: 4, 
    title: "Balance Canvas", 
    price: 9, 
    image: "/fashion/shoe1.jpg" 
    },
    { 
    id: 5, 
    title: "Sneakers", 
    price: 72.99, 
    image: "/fashion/shoe2.jpg" 
    },
  ];

  

const addToCart = (product) => {
  setCart({ ...cart, [product.id]: { ...product, quantity: 1 } });
};

const increase = (id) => {
  setCart({ 
    ...cart, 
    [id]: { ...cart[id], quantity: cart[id].quantity + 1 } 
  });
};

const decrease = (id) => {
  if (cart[id].quantity > 1) {
    setCart({ 
      ...cart, 
      [id]: { ...cart[id], quantity: cart[id].quantity - 1 } 
    });
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
            <button className="add-btn" onClick={() => addToCart(item)}>Add to Cart</button>
          ) : (
          <div className="counter">
            <button onClick={() => decrease(item.id)}>-</button>
            <span>{cart[item.id].quantity}</span>
            <button onClick={() => increase(item.id)}>+</button>
          </div>
          )}

        </div>
      ))}
    </div>
  );
}

export default Fashion