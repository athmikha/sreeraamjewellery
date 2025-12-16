// src/components/Footer.js
import "./footer.css";
import { IconPin, IconClock, IconPhone } from "../assets/icons";

function SocialIcon({ label }) {
  return <div className="socialIcon" aria-label={label} role="img" />;
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerTop">
        <div className="footerBrand">
          <img className="footerLogo" src="/assets/logo.svg" alt="Shri Raam Jewellery" />
          <p className="footerDesc">
            Trusted family jeweller for over 30 years, serving three generations with genuine quality and exceptional service.
          </p>
          <div className="socialRow">
            <SocialIcon label="Facebook" />
            <SocialIcon label="Instagram" />
            <SocialIcon label="WhatsApp" />
          </div>
        </div>

        <div className="footerCol">
          <div className="footerHead">Collections</div>
          <a href="#gold">Gold Jewellery</a>
          <a href="#diamond">Diamond Jewellery</a>
          <a href="#silver">Silver Jewellery</a>
          <a href="#special">Special Collections</a>
          <a href="#kids">Kids Jewellery</a>
        </div>

        <div className="footerCol">
          <div className="footerHead">Company</div>
          <a href="#about">About Us</a>
          <a href="#reviews">Reviews &amp; Testimonials</a>
          <a href="#visit">Visit Us</a>
        </div>

        <div className="footerCol">
          <div className="footerHead">Visit Our Showroom</div>
          <div className="footerInfo">
            <IconPin /> <span>Oppanakara Street, Town Hall area, Coimbatore</span>
          </div>
          <div className="footerInfo">
            <IconClock /> <span>Open Daily<br/>10:00 AM - 8:00 PM</span>
          </div>
          <div className="footerInfo">
            <IconPhone /> <span>+91 98765 43210</span>
          </div>
        </div>
      </div>

      <div className="container footerBottom">
        <div>© 2024 Shriraam Jewellery. All rights reserved. | Crafted with care since 1995</div>
        <div className="footerLinks">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
