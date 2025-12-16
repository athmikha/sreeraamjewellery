// src/components/TrustSection.js
import "./trust.css";
import { IconArrowRight } from "../assets/icons";

const points = [
  {
    title: "Legacy of Excellence",
    desc: "Three generations of families have trusted us with their precious moments and milestones",
  },
  {
    title: "Patient & Personalized Service",
    desc: "Our knowledgeable staff takes time to understand your preferences, never rushing your decision",
  },
  {
    title: "Genuine Quality & Pricing",
    desc: "Premium craftsmanship with transparent, honest pricing — no hidden costs, just pure value",
  },
  {
    title: "Collections for Every Generation",
    desc: "From bold traditional gold to minimalist modern designs and trendy silver for kids",
  },
];

export default function TrustSection() {
  return (
    <section className="section trustWrap" id="about">
      <div className="container trustGrid">
        <div className="trustLeft">
          <div className="trustImage" style={{ backgroundImage: "url(/assets/trust.jpg)" }} />
          <div className="trustBadge">
            <div className="trustBadgeNum">30+</div>
            <div className="trustBadgeTxt">Years of Trust</div>
          </div>
        </div>

        <div className="trustRight">
          <h3 className="trustTitle">
            Why Families Trust
            <br />
            Shriraam Jewellery
          </h3>
          <p className="trustIntro">
            For over three decades, we&apos;ve been a part of Coimbatore&apos;s most cherished moments — from weddings to
            festivals, from grandparents to grandchildren.
          </p>

          <div className="trustPoints">
            {points.map((p) => (
              <div className="trustPoint" key={p.title}>
                <div className="trustIconBox" />
                <div>
                  <div className="trustPointTitle">{p.title}</div>
                  <div className="trustPointDesc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="trustCta">
            <a className="btn btnPrimary" href="#about">
              Discover Our Story <IconArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
