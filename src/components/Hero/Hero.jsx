import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

function Hero({ scrollToProducts }) {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="hero">
      <div ref={textRef} className="hero-text">
        <h1>Wear Your Vibe 🍋</h1>
        <p>Streetwear inspired by you.</p>

        {/* 🔥 Scroll trigger */}
        <button onClick={scrollToProducts}>
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
