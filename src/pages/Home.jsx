import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import CategoryGrid from "../components/CategoryGrid/CategoryGrid";

function Home() {
  const [activeCategory, setActiveCategory] = useState("MEN");

  useEffect(() => {
    const handler = (e) => setActiveCategory(e.detail);
    window.addEventListener("changeCategory", handler);
    return () => window.removeEventListener("changeCategory", handler);
  }, []);

  return (
    <>
      <Hero />

      <div id="category-section">
        {activeCategory === "MEN" && (
          <CategoryGrid
            title="Men Collection"
            categories={[
              { name: "Shirts", image: "https://source.unsplash.com/400x600/?men,shirt" },
              { name: "T-Shirts", image: "https://source.unsplash.com/400x600/?men,tshirt" },
              { name: "Jeans", image: "https://source.unsplash.com/400x600/?men,jeans" },
              { name: "Polos", image: "https://source.unsplash.com/400x600/?men,polo" },
            ]}
          />
        )}

        {activeCategory === "WOMEN" && (
          <CategoryGrid
            title="Women Collection"
            categories={[
              { name: "Tops", image: "https://source.unsplash.com/400x600/?women,top" },
              { name: "Dresses", image: "https://source.unsplash.com/400x600/?women,dress" },
              { name: "Jeans", image: "https://source.unsplash.com/400x600/?women,jeans" },
              { name: "Jackets", image: "https://source.unsplash.com/400x600/?women,jacket" },
            ]}
          />
        )}

        {activeCategory === "SNEAKERS" && (
          <CategoryGrid
            title="Sneakers"
            categories={[
              { name: "Street Sneakers", image: "https://source.unsplash.com/400x600/?sneakers" },
              { name: "Running Shoes", image: "https://source.unsplash.com/400x600/?running,shoes" },
            ]}
          />
        )}
      </div>
    </>
  );
}

export default Home;
