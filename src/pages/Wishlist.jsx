import "./Wishlist.css";

function Wishlist() {
  const wishlistItems = [
    {
      name: "Lemon Oversized Tee",
      price: "₹999",
      image: "https://source.unsplash.com/400x500/?tshirt",
    },
    {
      name: "Street Sneakers",
      price: "₹2499",
      image: "https://source.unsplash.com/400x500/?sneakers",
    },
    {
      name: "Women Jacket",
      price: "₹1799",
      image: "https://source.unsplash.com/400x500/?jacket",
    },
  ];

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>

      <div className="wishlist-grid">
        {wishlistItems.map((item, index) => (
          <div className="wishlist-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.price}</p>

            <button className="remove-btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
