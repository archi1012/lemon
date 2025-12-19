import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* TOP TEXT */}
      <div className="brand-strip">
         <p>HOME GROWN BRAND 🇮🇳</p>
        </div>

      {/* MAIN FOOTER */}
      <div className="footer-content">
        <div className="footer-col">
          <h4>NEED HELP</h4>
          <p>Contact Us</p>
          <p>Track Order</p>
          <p>Returns & Refunds</p>
          <p>FAQs</p>
          <p>My Account</p>

          <div className="footer-badges">
            <span>₹ COD Available</span>
            <span>30 Days Easy Returns</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>COMPANY</h4>
          <p>About Us</p>
          <p>Investor Relations</p>
          <p>Careers</p>
          <p>Gift Vouchers</p>
          <p>Community Initiatives</p>
        </div>

        <div className="footer-col">
          <h4>MORE INFO</h4>
          <p>T&amp;C</p>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
          <p>Get Notified</p>
          <p>Blogs</p>
        </div>

        <div className="footer-col">
          <h4>STORE NEAR ME</h4>
          <p>Mumbai</p>
          <p>Anand</p>
          <p>Pune</p>
          <p>Bangalore</p>
          <p className="view-more">View More</p>
        </div>
      </div>

      {/* APP SECTION */}
      <div className="footer-app">
        <p>EXPERIENCE THE LEMON APP</p>
        <div className="app-buttons">
          <button>Google Play</button>
          <button>App Store</button>
        </div>
      </div>

      {/* SOCIAL */}
      <div className="footer-social">
        <span>Follow Us:</span>
        <div className="social-icons">
          <span>📘</span>
          <span>📸</span>
          <span>🐦</span>
          <span>▶️</span>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2025 LEMON. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
