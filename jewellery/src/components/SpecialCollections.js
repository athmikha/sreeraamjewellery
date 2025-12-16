// src/components/SpecialCollections.js
import "./special.css";
import { IconArrowRight, IconRing, IconSpark, IconPerson, IconGift } from "../assets/icons";

export default function SpecialCollections() {
  return (
    <section className="section" id="special">
      <div className="container">
        <div className="sectionHead">
          <div className="h2">Special Collections</div>
          <p className="sub">Curated selections for life&apos;s most meaningful moments and personal style preferences</p>
        </div>

        <div className="specialTop">
          <a className="specialWide" href="#bridal">
            <div className="specialWideLeft">
              <div className="specialWideIcon">
                <IconRing />
              </div>
              <div className="specialWideTitle">Bridal &amp; Wedding</div>
              <div className="specialWideDesc">Exquisite pieces to celebrate the most beautiful day of your life</div>
              <div className="specialWideLink">
                Explore Now <IconArrowRight />
              </div>
            </div>
            <div className="specialWideImg" style={{ backgroundImage: "url(/assets/special-bridal.jpg)" }} />
          </a>

          <a className="specialWide" href="#minimal">
            <div className="specialWideLeft">
              <div className="specialWideIcon">
                <IconSpark />
              </div>
              <div className="specialWideTitle">Minimalist Designs</div>
              <div className="specialWideDesc">Elegant simplicity for the modern, sophisticated taste</div>
              <div className="specialWideLink">
                Explore Now <IconArrowRight />
              </div>
            </div>
            <div className="specialWideImg" style={{ backgroundImage: "url(/assets/special-minimal.jpg)" }} />
          </a>
        </div>

        <div className="specialBottom">
          <a className="miniCard" href="#daily">
            <div className="miniIcon"><IconSpark /></div>
            <div className="miniTitle">Daily Wear</div>
            <div className="miniDesc">Comfortable elegance for everyday moments</div>
            <div className="miniLink">View Collection <IconArrowRight /></div>
          </a>

          <a className="miniCard" href="#kids">
            <div className="miniIcon"><IconPerson /></div>
            <div className="miniTitle">Kids Jewellery</div>
            <div className="miniDesc">Trendy, lightweight designs for young ones</div>
            <div className="miniLink">View Collection <IconArrowRight /></div>
          </a>

          <a className="miniCard" href="#gifting">
            <div className="miniIcon"><IconGift /></div>
            <div className="miniTitle">Gifting &amp; Pooja</div>
            <div className="miniDesc">Sacred items for auspicious occasions</div>
            <div className="miniLink">View Collection <IconArrowRight /></div>
          </a>
        </div>
      </div>
    </section>
  );
}
