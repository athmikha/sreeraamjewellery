// src/pages/SubCategoryPage.js
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavbarMega from "./NavbarMega";
import Footer from "../components/Footer";
import { CATEGORY_DATA } from "./categoryData";
import { getProducts, getCategorySubs, SHOW_PRICES, formatINR } from "./productsData";
import "./SubCategoryPage.css";

const SORTS = [
  { key: "position", label: "Sort by Position" },
  { key: "title_asc", label: "Name: A → Z" },
  { key: "title_desc", label: "Name: Z → A" },
  { key: "price_asc", label: "Price: Low → High" },
  { key: "price_desc", label: "Price: High → Low" },
];

const PRICE_BUCKETS = [
  { key: "0-9999", label: "₹0 - ₹9,999", min: 0, max: 9999 },
  { key: "10000-19999", label: "₹10,000 - ₹19,999", min: 10000, max: 19999 },
  { key: "20000-29999", label: "₹20,000 - ₹29,999", min: 20000, max: 29999 },
  { key: "30000-49999", label: "₹30,000 - ₹49,999", min: 30000, max: 49999 },
  { key: "50000-79999", label: "₹50,000 - ₹79,999", min: 50000, max: 79999 },
  { key: "80000+", label: "₹80,000 and above", min: 80000, max: Infinity },
];

export default function SubCategoryPage() {
  const { category, sub } = useParams();
  const catMeta = CATEGORY_DATA?.[category];

  const all = useMemo(() => getProducts(category, sub), [category, sub]);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sortKey, setSortKey] = useState("position");

  const [selectedSubs, setSelectedSubs] = useState([sub]); // category filter list (like screenshot)
  const [selectedPrice, setSelectedPrice] = useState(new Set()); // price filter buckets

  const availableSubs = useMemo(() => getCategorySubs(category), [category]);

  const filtered = useMemo(() => {
    let list = all.slice();

    // Category filter (within category) - if user selects others, show those too
    // NOTE: This is optional; if you want only current sub, keep selectedSubs fixed to [sub]
    if (selectedSubs.length > 0) {
      list = list.filter((p) => selectedSubs.includes(p.sub));
    }

    // Price filter (works only if prices exist)
    if (selectedPrice.size > 0) {
      const buckets = PRICE_BUCKETS.filter((b) => selectedPrice.has(b.key));
      list = list.filter((p) => {
        const val = Number(p.price || 0);
        return buckets.some((b) => val >= b.min && val <= b.max);
      });
    }

    // Sort
    if (sortKey === "title_asc") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortKey === "title_desc") {
      list.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortKey === "price_asc") {
      list.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortKey === "price_desc") {
      list.sort((a, b) => (b.price || 0) - (a.price || 0));
    }
    // position: keep original
    return list;
  }, [all, selectedSubs, selectedPrice, sortKey]);

  const heroTitle = useMemo(() => {
    const subTitle =
      catMeta?.subs?.find((s) => s.slug === sub)?.title ||
      sub?.replace(/-/g, " ") ||
      "Collection";
    return subTitle;
  }, [catMeta, sub]);

  function togglePrice(key) {
    setSelectedPrice((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function toggleSub(s) {
    setSelectedSubs((prev) => {
      const has = prev.includes(s);
      if (has) return prev.filter((x) => x !== s);
      return [...prev, s];
    });
  }

  return (
    <>
  <NavbarMega />

      <section className="subListTop">
        <div className="container subListBar">
          <button className="filterBtn" type="button" onClick={() => setDrawerOpen(true)} aria-label="Open filters">
            <span className="filterIcon" aria-hidden="true">☰</span>
            <span>Filter</span>
          </button>

          <div className="subListTitleWrap">
            <div className="subListTitle">{heroTitle}</div>
            <div className="subListSub">
              Crafted with care — browse the collection and pick your favourites.
            </div>
          </div>

          <div className="sortWrap">
            <select className="sortSelect" value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
              {SORTS.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Filter Drawer + Overlay */}
      <div className={`drawerOverlay ${drawerOpen ? "show" : ""}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`drawer ${drawerOpen ? "open" : ""}`} aria-label="Filters">
        <div className="drawerHeader">
          <div className="drawerTitle">FILTER</div>
          <button className="drawerClose" type="button" onClick={() => setDrawerOpen(false)} aria-label="Close filters">
            ✕
          </button>
        </div>

        <div className="drawerBody">
          <div className="filterBlock">
            <div className="filterHead">FILTER BY CATEGORY</div>

            <div className="filterList">
              {availableSubs.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`filterRow ${selectedSubs.includes(s) ? "on" : ""}`}
                  onClick={() => toggleSub(s)}
                >
                  <span className="filterName">{s.replace(/-/g, " ").toUpperCase()}</span>
                  <span className="filterCount">
                    {getProducts(category, s).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="filterBlock">
            <div className="filterHead">FILTER BY PRICE</div>
            <div className="filterList">
              {PRICE_BUCKETS.map((b) => (
                <button
                  key={b.key}
                  type="button"
                  className={`filterRow ${selectedPrice.has(b.key) ? "on" : ""}`}
                  onClick={() => togglePrice(b.key)}
                >
                  <span className="filterName">{b.label}</span>
                  <span className="filterCount"> </span>
                </button>
              ))}
            </div>
          </div>

          <div className="drawerFooter">
            <button
              className="btn btnLight"
              type="button"
              onClick={() => {
                setSelectedSubs([sub]);
                setSelectedPrice(new Set());
              }}
            >
              Clear All
            </button>
            <button className="btn btnPrimary" type="button" onClick={() => setDrawerOpen(false)}>
              Apply
            </button>
          </div>
        </div>
      </aside>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="emptyState card">
              <div className="emptyTitle">No products found</div>
              <div className="emptyText">Try adjusting filters or explore another category.</div>
              <Link className="btn btnPrimary" to={`/category/${category}`}>
                Back to {catMeta?.title || "Category"}
              </Link>
            </div>
          ) : (
            <div className="prodGrid">
              {filtered.map((p) => (
                <Link
                  key={p.id}
                  to={`/category/${category}/${p.sub}/${p.id}`}
                  className="prodCard"
                  aria-label={p.title}
                >
                  <div className="prodImg" style={{ backgroundImage: `url(${p.images?.[0]})` }}>
                    <button
                      type="button"
                      className="heartBtn"
                      aria-label="Save"
                      onClick={(e) => e.preventDefault()}
                    >
                      ♡
                    </button>
                  </div>

                  <div className="prodBody">
                    <div className="prodTitle">{p.title}</div>
                    {SHOW_PRICES && <div className="prodPrice">{formatINR(p.price)}</div>}
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="subCta card">
            <div className="subCtaTitle">👉 Visit Our Showroom to See the Full Collection</div>
            <div className="subCtaText">
              Explore finishes, sizes, and the full range in person — our team will help you pick the perfect piece.
            </div>
            <a className="btn btnPrimary" href="/#visit">Visit Our Showroom</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
