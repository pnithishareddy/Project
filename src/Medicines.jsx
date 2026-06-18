import { useState } from "react";

function Medicines() {
  const medicines = [
    { id: 1, name: "Arnica 30", price: 120 },
    { id: 2, name: "Belladonna 30", price: 150 },
    { id: 3, name: "Bryonia 30", price: 180 },
    { id: 4, name: "Nux Vomica", price: 200 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="medicines">
      <h2>Popular Medicines</h2>

      <div className="cards">
        {medicines.map((med) => (
          <div key={med.id} className="card">
            <h3>{med.name}</h3>
            <p>₹{med.price}</p>

            <button onClick={() => addToCart(med)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h3>Cart Items: {cart.length}</h3>
        <h2>Total: ₹{total}</h2>
      </div>
    </section>
  );
}

export default Medicines;