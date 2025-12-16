// src/components/Navbar.js
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navWrap">
      <div className="container nav">
        <a className="brand" href="/">
          <img className="brandLogo" src="/assets/logo.svg" alt="Shri Raam Jewellery" />
          <div className="brandText">
            <div className="brandName">SHRI RAAM</div>
            <div className="brandSub">JEWELLERY</div>
          </div>
        </a>

        <nav className="navLinks" aria-label="Primary">
          <a href="#gold">Gold Jewellery</a>
          <a href="#diamond">Diamond Jewellery</a>
          <a href="#silver">Silver Jewellery</a>
          <a href="#special">Special Collections</a>
          <a href="#about">About Us</a>
        </nav>

        <a className="navCta" href="#visit">
          Visit Our Showroom
        </a>
      </div>
    </header>
  );
}
