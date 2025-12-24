import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavbarMega.css";

const NAV = [
  {
    key: "gold",
    label: "Gold Jewellery",
    leftSections: [
      {
        title: "SHOP GOLD",
        items: [
          { label: "Necklaces", to: "/category/gold/necklaces" },
          { label: "Bangles", to: "/category/gold/bangles" },
          { label: "Rings", to: "/category/gold/rings" },
          { label: "Chains", to: "/category/gold/chains" },
        ],
      },
    ],
    rightTiles: [
      { title: "Traditional Gold", img: "/assets/nav/gold1.png", to: "/category/gold" },
      { title: "Modern Gold", img: "/assets/nav/gold1.png", to: "/category/gold" },
    ],
  },
  {
    key: "diamond",
    label: "Diamond Jewellery",
    leftSections: [
      {
        title: "SHOP DIAMONDS",
        items: [
          { label: "Rings", to: "/category/diamond/rings" },
          { label: "Necklaces", to: "/category/diamond/necklaces" },
          { label: "Bracelets", to: "/category/diamond/bracelets" },
        ],
      },
    ],
    rightTiles: [
      { title: "Bridal Diamonds", img: "/assets/nav/gold1.png", to: "/category/diamond" },
      { title: "Minimal Diamonds", img: "/assets/nav/gold1.png", to: "/category/diamond" },
    ],
  },
  {
    key: "silver",
    label: "Silver Jewellery",
    leftSections: [
      {
        title: "SHOP SILVER",
        items: [
          { label: "Daily Wear", to: "/category/silver/daily" },
          { label: "Kids Jewellery", to: "/category/silver/kids" },
          { label: "Gifting & Pooja", to: "/category/silver/gifting" },
        ],
      },
    ],
    rightTiles: [
      { title: "Trendy Silver", img: "/assets/nav/gold1.png", to: "/category/silver" },
      { title: "Classic Silver", img: "/assets/nav/gold1.png", to: "/category/silver" },
    ],
  },
];

export default function NavbarMega() {
  const [openKey, setOpenKey] = useState(null);
  const navigate = useNavigate();
  const openItem = useMemo(() => NAV.find(x => x.key === openKey), [openKey]);

  return (
    <header className="navHeader" onMouseLeave={() => setOpenKey(null)}>
      {/* SINGLE LINE BAR */}
      <div className="navBar">
        <Link to="/" className="navBrand">SHRI RAAM JEWELLERY</Link>

        <nav className="navLinks">
          {NAV.map(item => (
            <button
              key={item.key}
              className="navLink"
              onMouseEnter={() => setOpenKey(item.key)}
              onClick={() => navigate(`/category/${item.key}`)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <input className="navSearch" placeholder="Search jewellery" />
      </div>

      {/* MEGA MENU */}
      {openItem && (
        <div className="megaMenu">
          <div className="megaInner">
            <div className="megaLeft">
              {openItem.leftSections.map(sec => (
                <div key={sec.title}>
                  <div className="megaTitle">{sec.title}</div>
                  {sec.items.map(i => (
                    <Link key={i.to} to={i.to} className="megaLink">
                      {i.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            <div className="megaRight">
              {openItem.rightTiles.map(tile => (
                <Link key={tile.to} to={tile.to} className="megaTile">
                  <div
                    className="megaImg"
                    style={{ backgroundImage: `url(${tile.img})` }}
                  />
                  <span>{tile.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
