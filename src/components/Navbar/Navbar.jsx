import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar({ setSearchQuery }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setInput(value);
    setSearchQuery(value);
    navigate("/"); // always search on home
  };

  const changeCategory = (category) => {
    window.dispatchEvent(
      new CustomEvent("changeCategory", { detail: category })
    );

    const section = document.getElementById("category-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo" onClick={() => navigate("/")}>
          LEMON 🍋
        </div>

        <ul className="nav-links">
          <li onClick={() => changeCategory("MEN")}>MEN</li>
          <li onClick={() => changeCategory("WOMEN")}>WOMEN</li>
          <li onClick={() => changeCategory("SNEAKERS")}>SNEAKERS</li>
        </ul>
      </div>

      <div className="nav-right">
        <div className="search-box">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={input}
            onChange={handleSearch}
          />
        </div>

        <div className="icons">
          <span onClick={() => navigate("/login")}>👤</span>
          <span onClick={() => navigate("/wishlist")}>🤍</span>
          <span onClick={() => navigate("/cart")}>🛒</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
