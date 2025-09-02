import "./home.css";

function Home({cart, setCart}) {

  const products = [
    {
    id: 201, 
    title: "Bedsheet", 
    price: 299, 
    image: "/home/bedsheet.jpg" 
    },
    { 
    id: 202, 
    title: "Couch", 
    price: 129, 
    image: "/home/couch.jpg" 
    },
    { 
    id: 203, 
    title: "Laptop Stand", 
    price: 599, 
    image: "/home/Lap2.jpg" 
    },
    { 
    id: 204, 
    title: "Portable Wadrobe", 
    price: 9, 
    image: "/home/wadrobe.jpg" 
    },
    { 
    id: 205, 
    title: "Laptop Stand", 
    price: 72.99, 
    image: "/home/Laptop Stand.jpg" 
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

export default Home