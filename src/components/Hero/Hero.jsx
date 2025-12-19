import { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current.children, {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <section className="h-[90vh] flex items-center justify-center bg-dark text-white">
      <div ref={textRef} className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Wear Your Vibe 🍋
        </h1>
        <p className="text-lg opacity-80">
          Streetwear inspired by you.
        </p>
        <button className="mt-8 px-8 py-3 bg-lemon text-black font-semibold rounded hover:scale-105 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
