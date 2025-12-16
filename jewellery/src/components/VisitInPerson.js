// src/components/VisitInPerson.js
import "./visit.css";
import { IconArrowRight, IconPin, IconPhone, IconClock, IconQuote } from "../assets/icons";

export default function VisitInPerson() {
  return (
    <section className="section visitWrap">
      <div className="container visitGrid">
        <div className="visitLeft">
          <p className="visitPara">
            Nothing compares to seeing the brilliance and craftsmanship of fine jewellery in person. Visit our showroom
            in Coimbatore and let our friendly team help you find the perfect piece.
          </p>

          <div className="visitItems">
            <div className="visitItem">
              <div className="visitDot"><IconPin /></div>
              <div>
                <div className="visitItemTitle">Our Location</div>
                <div className="visitItemSub">Oppanakara Street, Town Hall area<br/>Coimbatore</div>
              </div>
            </div>

            <div className="visitItem">
              <div className="visitDot"><IconPhone /></div>
              <div>
                <div className="visitItemTitle">Call Us</div>
                <div className="visitItemSub">We&apos;re here to answer your questions</div>
              </div>
            </div>

            <div className="visitItem">
              <div className="visitDot"><IconClock /></div>
              <div>
                <div className="visitItemTitle">Take Your Time</div>
                <div className="visitItemSub">No rush, no pressure - just friendly guidance</div>
              </div>
            </div>
          </div>

          <div className="btnRow visitBtns">
            <a className="btn btnPrimary" href="https://maps.google.com" target="_blank" rel="noreferrer">
              Get Directions <IconArrowRight />
            </a>
            <a className="btn btnLight" href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="visitRight">
          <div className="visitImg" style={{ backgroundImage: "url(/assets/visit.jpg)" }} />
          <div className="visitQuote">
            <div className="visitQuoteIcon"><IconQuote /></div>
            <div className="visitQuoteText">
              Creating precious memories
              <br />
              for families since 1995
            </div>
            <div className="visitQuoteBy">— Shriraam Jewellery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
