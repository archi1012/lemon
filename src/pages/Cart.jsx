import "./Cart.css";

function Cart() {
  const cartItems = [
    {
      name: "Lemon Oversized Tee",
      price: 999,
      qty: 1,
      image: "https://source.unsplash.com/400x500/?tshirt",
    },
    {
      name: "Street Sneakers",
      price: 2499,
      qty: 1,
      image: "https://source.unsplash.com/400x500/?sneakers",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="cart-page">
      <h2>My Cart</h2>

      <div className="cart-container">
        {/* LEFT: CART ITEMS */}
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <div className="qty">
                  <button>-</button>
                  <span>{item.qty}</span>
                  <button>+</button>
                </div>

                <button className="remove">Remove</button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
