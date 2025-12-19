import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import CategoryGrid from "../components/CategoryGrid/CategoryGrid";

function Home({ searchQuery }) {
  const [activeCategory, setActiveCategory] = useState("MEN");

  useEffect(() => {
    const handler = (e) => setActiveCategory(e.detail);
    window.addEventListener("changeCategory", handler);
    return () => window.removeEventListener("changeCategory", handler);
  }, []);

  const allCategories = {
    MEN: [
      { name: "Shirts", image: "https://source.unsplash.com/400x600/?men,shirt" },
      { name: "T-Shirts", image: "https://source.unsplash.com/400x600/?men,tshirt" },
      { name: "Jeans", image: "https://source.unsplash.com/400x600/?men,jeans" },
      { name: "Polos", image: "https://source.unsplash.com/400x600/?men,polo" },
    ],
    WOMEN: [
      { name: "Tops", image: "https://source.unsplash.com/400x600/?women,top" },
      { name: "Dresses", image: "https://source.unsplash.com/400x600/?women,dress" },
      { name: "Jeans", image: "https://source.unsplash.com/400x600/?women,jeans" },
      { name: "Jackets", image: "https://source.unsplash.com/400x600/?women,jacket" },
    ],
    SNEAKERS: [
      { name: "Street Sneakers", image: "https://source.unsplash.com/400x600/?sneakers" },
      { name: "Running Shoes", image: "https://source.unsplash.com/400x600/?running,shoes" },
    ],
  };

  // 🔍 SEARCH FILTER
  const filteredData = allCategories[activeCategory].filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Hero />

      <div id="category-section">
        <CategoryGrid
          title={`${activeCategory} Collection`}
          categories={filteredData}
        />

        {filteredData.length === 0 && (
          <p style={{ padding: "40px", textAlign: "center" }}>
            No products found 😕
          </p>
        )}
      </div>
    </>
  );
}

export default Home;
