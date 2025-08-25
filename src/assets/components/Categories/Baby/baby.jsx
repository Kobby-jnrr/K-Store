import "./baby.css";

function Baby({cart, setCart}) {

  const products = [
    {
    id: 401, 
    title: "Baby Net", 
    price: 299, 
    image: "/baby/babynet.jpg" 
    },
    { 
    id: 402, 
    title: "Baby Pack", 
    price: 129, 
    image: "/baby/babypack.jpg" 
    },
    { 
    id: 403, 
    title: "Diapers", 
    price: 599, 
    image: "/baby/diaper.jpg" 
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

export default Baby