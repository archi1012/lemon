import { useRef } from "react";
import Hero from "../components/Hero/Hero";
import ProductCard from "../components/ProductCard/ProductCard";
import "./Home.css";

function Home() {
  const productsRef = useRef(null); // 🔥 reference

  return (
    <>
      {/* Pass ref handler to Hero */}
      <Hero scrollToProducts={() => {
        productsRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }} />

      <section ref={productsRef} className="products-section">
        <h2 className="section-title">Trending Products</h2>

        <div className="products-grid">
          <ProductCard name="Lemon Oversized Tee" price="999" />
          <ProductCard name="Street Hoodie" price="1499" />
          <ProductCard name="Graphic T-Shirt" price="799" />
          <ProductCard name="Casual Wear" price="699" />
        </div>
      </section>
    </>
  );
}

export default Home;
