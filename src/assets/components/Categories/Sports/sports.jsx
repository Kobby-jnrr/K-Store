import "./sports.css";

function Sports({cart, setCart}) {

  const products = [
    {
    id: 601, 
    title: "Arsenal Jersey", 
    price: 299, 
    image: "/sports/arsenal.jpg" 
    },
    { 
    id: 602, 
    title: "Liverpool Jersey", 
    price: 129, 
    image: "/sports/liverpool.jpg"
    },
    { 
    id: 603, 
    title: "Real Madrid Jersey", 
    price: 599, 
    image: "/sports/madrid.jpg"
    },
    { 
    id: 604, 
    title: "Basketball", 
    price: 9, 
    image: "/sports/basketball.jpg"
    },
    { 
    id: 605, 
    title: "Skipping Rope", 
    price: 72.99, 
    image: "/sports/skippingrope.jpg"
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

export default Sports