import Hero from "@/components/home/Hero";
import AboutStats from "@/components/home/AboutStats";
import WhoWeAre from "@/components/home/WhoWeAre";
import Services from "@/components/home/Services";
import Gallery from "@/components/home/Gallery";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStats />
      <WhoWeAre />
      <Services />
      <Gallery />
      <CTA />
    </>
  );
}
