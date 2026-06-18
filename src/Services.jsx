import { useState } from "react";

import img1a from "./1a.webp";
import img1b from "./1b.webp";
import img1c from "./1c.avif";

import img2a from "./2a.webp";
import img2b from "./2b.webp";
import img2c from "./2c.jpg";

import img3a from "./3a.webp";
import img3b from "./3b.webp";
import img3c from "./3c.jpg";

import a from "./a.webp";
import b from "./b.png";
import c from "./c.png";

function Services() {
  const [selected, setSelected] = useState("");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const medicines = {
    allergy: [
      { image: img1a, name: "Cold", price: 250 },
      { image: img1b, name: "Fever", price: 300 },
      { image: img1c, name: "Cough", price: 350 },
    ],

    skin: [
      { image: img2a, name: "Skin Glow", price: 280 },
      { image: img2b, name: "Blood Infection", price: 320 },
      { image: img2c, name: "Wounds", price: 290 },
    ],

    child: [
      { image: img3a, name: "Appetite", price: 220 },
      { image: img3b, name: "Growth", price: 270 },
      { image: img3c, name: "Child Wellness", price: 310 },
    ],
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="cards">
       
  <div
    className="card service-card"
    onClick={() => setSelected("allergy")}
  >
    <img
      src={a}
      alt="Allergy Treatment"
      className="main-service-img"
    />

    <h3>Allergy Treatment</h3>
    <p>Click to View Medicines</p>
  </div>
<div
  className="card service-card"
  onClick={() => setSelected("skin")}
>
  <img
    src={b}
    alt="Skin Treatment"
    className="main-service-img"
  />

  <h3>Skin Treatment</h3>
  <p>Click to View Medicines</p>
</div>

<div
  className="card service-card"
  onClick={() => setSelected("child")}
>
  <img
    src={c}
    alt="Child Treatment"
    className="main-service-img"
  />

  <h3>Child Treatment</h3>
  <p>Click to View Medicines</p>
</div>
      </div>

      {selected && (
        <>
          <h2 className="medicine-title">
            Available Medicines
          </h2>

          <div className="medicine-cards">
            {medicines[selected].map((item, index) => (
              <div className="medicine-card" key={index}>
                <img src={item.image} alt={item.name} />

                <div className="medicine-info">
                  <h3>{item.name}</h3>

                  <p className="price">
                    ₹{item.price}
                  </p>

                  <button
                    onClick={() => addToCart(item)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="cart-section">
        <h2> Cart ({cart.length})</h2>

        {cart.length === 0 ? (
          <p>No medicines added.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <span>
                  {item.name} - ₹{item.price}
                </span>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(index)
                  }
                >
                  X
                </button>
              </div>
            ))}

            <h3>Total: ₹{totalPrice}</h3>
          </>
        )}
      </div>
    </section>
  );
}

export default Services;
