// src/pages/Home.js
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import TrustSection from "../components/TrustSection";
import SpecialCollections from "../components/SpecialCollections";
import ShowroomBanner from "../components/ShowroomBanner";
import VisitInPerson from "../components/VisitInPerson";
import Footer from "../components/Footer";
import NavbarMega from "../NavbarMega";
export default function Home() {
  return (
    <>
      <NavbarMega />
      <main>
        <Hero />
        <Collections />
        <TrustSection />
        <SpecialCollections />
        <ShowroomBanner />
        <VisitInPerson />
      </main>
      <Footer />
    </>
  );
}
