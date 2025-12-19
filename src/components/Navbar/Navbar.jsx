import { useEffect, useRef } from "react";
import gsap from "gsap";

function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="h-[70px] px-12 flex items-center justify-between bg-lemon"
    >
      <h1 className="text-2xl font-bold">LEMON 🍋</h1>

      <ul className="flex gap-8 font-medium">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Shop</li>
        <li className="cursor-pointer">Men</li>
        <li className="cursor-pointer">Women</li>
        <li className="cursor-pointer">Cart</li>
      </ul>
    </nav>
  );
}

export default Navbar;
