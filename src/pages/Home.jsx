import Hero from "../components/Hero/Hero";
import ProductCard from "../components/ProductCard/ProductCard";

function Home() {
  return (
    <>
      <Hero />

      <section className="px-12 py-12">
        <h2 className="text-2xl font-bold mb-6">
          Trending Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
