// src/components/ShowroomBanner.js
import "./showroom.css";
import { IconBag, IconPin, IconClock, IconPhone } from "../assets/icons";

export default function ShowroomBanner() {
  return (
    <section className="showroomBand" id="visit">
      <div className="container showroomInner">
        <div className="showroomIcon">
          <IconBag />
        </div>

        <h3 className="showroomTitle">Visit Our Showroom in Coimbatore</h3>
        <p className="showroomText">
          Experience our complete collection in person. Our patient and knowledgeable staff are ready to help you find
          the perfect piece for your special moment.
        </p>

        <div className="showroomMetaRow">
          <div className="showroomMeta">
            <IconPin />
            <span>Oppanakara Street, Town Hall area</span>
          </div>
          <div className="showroomMeta">
            <IconClock />
            <span>Open Daily 10 AM – 8 PM</span>
          </div>
        </div>

        <div className="btnRow showroomBtns">
          <a className="btn btnPrimary" href="https://maps.google.com" target="_blank" rel="noreferrer">
            Get Directions
          </a>
          <a className="btn btnLight" href="tel:+919876543210">
            <IconPhone /> Call Us Now
          </a>
        </div>

        <div className="showroomDivider" />

        <div className="showroomStatsKicker">Trusted by families since 1995</div>

        <div className="showroomStats">
          <div className="stat">
            <div className="statNum">30+</div>
            <div className="statLbl">Years of Trust</div>
          </div>
          <div className="statSep" />
          <div className="stat">
            <div className="statNum">3</div>
            <div className="statLbl">Generations Served</div>
          </div>
          <div className="statSep" />
          <div className="stat">
            <div className="statNum">100%</div>
            <div className="statLbl">Genuine Quality</div>
          </div>
        </div>
      </div>
    </section>
  );
}
