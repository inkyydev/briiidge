import Hero from "./hero/Hero";
import MainLinks from "../../components/main-links/MainLinks";
import HowItWorks from "./HowItWorks";
import OurNetwork from "./OurNetwork";
import Contact from "./Contact";
import OurValues from "./our-values/OurValues";
import "./Homepage.css";

export default function Homepage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <OurValues />
      <OurNetwork />
      <Contact />
    </>
  );
}
