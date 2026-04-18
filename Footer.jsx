import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left */}
        <div className="footer-left">
          <h2>Veloura</h2>
          <p>Style that defines you</p>
        </div>

        {/* Middle */}
        <div className="footer-links">
          <p>Home</p>
          <p>Category</p>
          <p>Cart</p>
        </div>

        {/* Right */}
        <div className="footer-contact">
          <p>Email: support@veloura.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      {/* Bottom */}
      <p className="footer-bottom">
        © 2026 Veloura. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;