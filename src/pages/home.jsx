import React from "react";
import Hero from "../components/home/hero";
import Services from "../components/home/services";
import OurTeam from "../components/home/our-team";
import Application from "../components/home/application";
import LastSection from "../components/home/last-section";
import Footer from "../components/layout/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <OurTeam />
      <Application />
      <LastSection />
      <Footer />
    </>
  );
}
