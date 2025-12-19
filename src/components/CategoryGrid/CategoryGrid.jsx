import "./CategoryGrid.css";

function CategoryGrid({ title, categories }) {
  return (
    <section className="category-section">
      <h2 className="category-title">{title}</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;
