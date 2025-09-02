import "./beauty.css";

function Beauty({cart, setCart}) {

  const products = [
    {
    id: 501, 
    title: "Nivea Body Lotion", 
    price: 299, 
    image: "/beauty/Nivea 2.jpg"  
    },
    { 
    id: 502, 
    title: "Makeup Kit", 
    price: 129, 
    image: "/beauty/1 (13).jpg"
    },
    { 
    id: 503, 
    title: "Nivea Body Lotion", 
    price: 599, 
    image: "/beauty/Nivea Body Lotion.jpg" 
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

export default Beauty