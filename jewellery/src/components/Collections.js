// src/components/Collections.js
import "./collections.css";
import { IconArrowRight } from "../assets/icons";

const items = [
  { id: "gold", title: "Gold Jewellery", desc: "Traditional bold designs & modern elegance", img: "/assets/nav/gold1.png" },
  { id: "diamond", title: "Diamond Jewellery", desc: "Brilliant cuts for life's special moments", img: "/assets/diamond.jpg" },
  { id: "silver", title: "Silver Jewellery", desc: "Contemporary designs for everyday elegance", img: "/assets/silver.jpg" },
  { id: "platinum", title: "Platinum Jewellery", desc: "Pure luxury with timeless sophistication", img: "/assets/platinum.jpg" },
  { id: "custom", title: "Custom Creations", desc: "Personalised jewellery crafted just for you", img: "/assets/custom.jpg" },
];

export default function Collections() {
  return (
   <section className="section collectionsSection" id="collections">
      <div className="container">
        <div className="sectionHead">
          <div className="h2">Explore Our Collections</div>
          <p className="sub">
            From timeless gold to contemporary diamonds and elegant silver — find the perfect piece for every generation
            and occasion
          </p>
        </div>

        <div className="collectionsGrid">
          {items.map((it) => (
            <a key={it.id} className="collectionCard" href={`#${it.id}`} aria-label={it.title}>
              <div className="collectionImg" style={{ backgroundImage: `url(${it.img})` }} />
              <div className="collectionShade" />
              <div className="collectionBody">
                <div className="collectionTitle">{it.title}</div>
                <div className="collectionDesc">{it.desc}</div>
                <div className="collectionLink">
                  Explore Collection <IconArrowRight />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
