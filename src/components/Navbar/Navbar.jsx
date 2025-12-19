import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.to(navRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <nav ref={navRef} className="navbar">
      <div className="logo">
        LEMON <span>🍋</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
}

export default Navbar;
