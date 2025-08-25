import "./electronics.css";

function Electronics({cart, setCart}) {

  const products = [
    {
    id: 101, 
    title: "Fridge", 
    price: 299, 
    image: "/electronics/fridge.jpg" 
    },
    { 
    id: 102, 
    title: "Mi-fi", 
    price: 129, 
    image: "/electronics/mifi.jpg" 
    },
    { 
    id: 103, 
    title: "Asana TV", 
    price: 599, 
    image: "/electronics/tv1.jpg"  
    },
    { 
    id: 104, 
    title: "Projector", 
    price: 9, 
    image: "/electronics/projector.jpg" 
    },
    { 
    id: 105, 
    title: "Samsung Galaxy A36", 
    price: 72.99, 
    image: "/electronics/Samsung Galaxy A36.jpg" 
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

export default Electronics