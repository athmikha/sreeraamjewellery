// ✅ MODIFY: src/pages/ProductPage.js
// What this does:
// - When "Enquire on WhatsApp" is clicked → opens WhatsApp chat to 9443379960
// - Prefills message with Name, Product ID, and a FULL image URL
// - Uses your current page origin (localhost / yourdomain) automatically

import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavbarMega from "./NavbarMega";
import Footer from "../components/Footer";
import { getProductById, getProducts, SHOW_PRICES, formatINR } from "./productsData";
import "./ProductPage.css";

const WHATSAPP_NUMBER = "9443379960";

function absoluteUrl(path) {
  if (!path) return "";
  // If already absolute
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  // Ensure leading slash
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${window.location.origin}${clean}`;
}

function openWhatsAppEnquiry({ name, productId, imageUrl }) {
  const msg =
    `Hello Shri Raam Jewellery,\n\n` +
    `I'm interested in this product:\n\n` +
    `Name: ${name}\n` +
    `Product ID: ${productId}\n\n` +
    `Image:\n${imageUrl}\n\n` +
    `Please share more details.`;

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, "_blank", "noopener,noreferrer");
}

export default function ProductPage() {
  const { category, sub, productId } = useParams();
  const product = useMemo(() => getProductById(productId), [productId]);
  const [activeIdx, setActiveIdx] = useState(0);

  const related = useMemo(() => {
    const list = getProducts(category, sub).filter((p) => p.id !== productId);
    return list.slice(0, 6);
  }, [category, sub, productId]);

  if (!product) {
    return (
      <>
        <NavbarMega />
        <div className="container pdNotFound">
          <h1 className="pdTitle">Product not found</h1>
          <Link className="btn btnPrimary" to={`/category/${category}/${sub}`}>
            Back to Collection
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const images = product.images || [];
  const main = images[activeIdx] || images[0];
  const mainAbs = absoluteUrl(main);

  return (
    <>
      <NavbarMega />

      <section className="section">
        <div className="container pdGrid">
          {/* Left: Gallery */}
          <div className="pdLeft">
            <div className="pdMain" style={{ backgroundImage: `url(${main})` }} />

            <div className="pdThumbRow">
              {images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  className={`pdThumb ${i === activeIdx ? "on" : ""}`}
                  style={{ backgroundImage: `url(${img})` }}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="pdRight">
            <div className="pdCrumbs">
              <Link to="/">Home</Link> <span>›</span>{" "}
              <Link to={`/category/${category}`}>{category}</Link> <span>›</span>{" "}
              <Link to={`/category/${category}/${sub}`}>{sub}</Link>
            </div>

            <h1 className="pdName">{product.title}</h1>
            <p className="pdSub">{product.subtitle}</p>

            {SHOW_PRICES && <div className="pdPrice">{formatINR(product.price)}</div>}

            <div className="pdMeta">
              <div className="pdMetaRow">
                <span className="pdMetaKey">Metal</span>
                <span className="pdMetaVal">{product.metal}</span>
              </div>
              <div className="pdMetaRow">
                <span className="pdMetaKey">Style</span>
                <span className="pdMetaVal">{product.style}</span>
              </div>
            </div>

            <div className="pdActions">
              <a className="btn btnPrimary" href="/#visit">
                Visit Our Showroom
              </a>

              {/* ✅ WhatsApp Enquiry */}
              <button
                className="btn btnLight"
                type="button"
                onClick={() =>
                  openWhatsAppEnquiry({
                    name: product.title,
                    productId: product.id,
                    imageUrl: mainAbs,
                  })
                }
              >
                Enquire on WhatsApp
              </button>
            </div>

            <div className="pdCare card">
              <div className="pdCareHead">Care & Handling</div>
              <ul className="pdCareList">
                <li>Wear last, and take off first.</li>
                <li>Keep it dry. Avoid perfume and harsh chemicals.</li>
                <li>Wipe gently with a soft cloth and store separately.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="container">
          <div className="pdRelHead">More from this collection</div>
          <div className="pdRelGrid">
            {related.map((p) => (
              <Link key={p.id} to={`/category/${category}/${sub}/${p.id}`} className="pdRelCard">
                <div className="pdRelImg" style={{ backgroundImage: `url(${p.images?.[0]})` }} />
                <div className="pdRelTitle">{p.title}</div>
              </Link>
            ))}
          </div>

          <div className="pdEnd card">
            <div className="pdEndTitle">👉 Visit Our Showroom to See the Full Collection</div>
            <div className="pdEndText">
              Experience the finish and craftsmanship in person — our team will guide you with patience.
            </div>
            <a className="btn btnPrimary" href="/#visit">
              Visit Our Showroom
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
