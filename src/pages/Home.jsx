import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "120px", textAlign: "center" }}>
        <h3>Loading products...</h3>
      </div>
    );
  }

  return (
    <div style={{ padding: "120px 40px" }}>
      <h2 style={{ marginBottom: "30px" }}>All Products</h2>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "6px",
                padding: "12px",
                background: "#fff",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />

              <h4 style={{ margin: "10px 0 5px" }}>
                {product.name}
              </h4>

              <p style={{ fontWeight: "bold" }}>
                ₹{product.price}
              </p>

              <p
                style={{
                  fontSize: "13px",
                  color: "#555",
                  marginBottom: "10px",
                }}
              >
                Category: {product.category}
              </p>

              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "black",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
