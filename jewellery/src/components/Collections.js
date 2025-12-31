// src/components/Collections.js
import "./collections.css";
import { IconArrowRight } from "../assets/icons";

const items = [
  { id: "gold", title: "Traditional Gold", desc: "Timeless designs passed through generations", img: "/assets/nav/gold1.png" },
  { id: "minimal", title: "Contemporary Minimal", desc: "Modern elegance for today's style", img: "/assets/special-minimal.jpg" },
  { id: "bridal", title: "Bridal Collection", desc: "Make your special day unforgettable", img: "/assets/diamond.jpg" },
  { id: "diamond", title: "Diamond Elegance", desc: "Sparkle with timeless brilliance", img: "/assets/silver.jpg" },
];

export default function Collections() {
  return (
   <section className="section collectionsSection" id="collections">
      <div className="container">
        <div className="sectionHead">
          <div className="h2">Featured Collections</div>
          <p className="sub">
            Discover our curated selection of exquisite jewellery, crafted with precision and passion.
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
