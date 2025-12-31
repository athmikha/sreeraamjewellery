// src/components/Hero.js
import "./hero.css";
import { IconArrowRight, IconPin } from "../assets/icons";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="heroBg" style={{ backgroundImage: `url(/assets/hero.jpg)` }} />
      <div className="heroOverlay" />
      <div className="container heroInner">
        <div className="heroContent">
          <div className="pill">
            <span className="pillDot" />
            Trusted by Families for Over 30 Years
          </div>

          <h1 className="heroTitle">
            Celebrate Life&apos;s
            <br />
            Precious Moments
            <br />
            with Timeless
            <br />
            Jewellery
          </h1>

          <p className="heroText">
            From bold traditional gold to elegant minimalist designs — discover collections crafted with genuine care
            for three generations of your family in Coimbatore.
          </p>

          <div className="btnRow heroBtns">
            <a className="btn btnPrimary" href="#visit">
              Explore Our Showroom <IconArrowRight />
            </a>
            <a className="btn btnGhost" href="#collections">
              View Collections <span className="spark">✦</span>
            </a>
          </div>

          <div className="heroMeta">
            <IconPin />
            <span>Visit us at Oppanakara Street, Town Hall area, Coimbatore</span>
          </div>
        </div>

        <div className="heroCarousel" aria-label="Featured collection carousel">
          <div className="carouselFrame">
            <div className="carouselSlide" style={{ backgroundImage: "url(/assets/diamond.jpg)" }}>
              <div className="carouselCaption">Bridal Diamonds</div>
            </div>
            <div className="carouselSlide" style={{ backgroundImage: "url(/assets/nav/gold1.png)", animationDelay: "6s" }}>
              <div className="carouselCaption">Traditional Gold</div>
            </div>
            <div className="carouselSlide" style={{ backgroundImage: "url(/assets/special-minimal.jpg)", animationDelay: "12s" }}>
              <div className="carouselCaption">Minimalist Sets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
