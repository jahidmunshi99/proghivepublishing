// import About from "../About";
import RevealOnScroll from "../../components/ui/RevealOnScroll";
import CallToAction from "./CallToAction";
import CompactSection from "./CompactSection";
import ContactSection from "./ContactSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import MediaCoverage from "./MediaCoverage";
import Portfolio from "./Portfolio";
import ServicesSection from "./ServicesSection";
import TestimonialSection from "./TestimonialSection";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection />
      {/* <!-- Media Coverage Section --> */}
      <MediaCoverage />
      {/* <!-- Services Section --> */}
      <RevealOnScroll>
        <ServicesSection />
      </RevealOnScroll>

      {/* <!-- Why Choose Us Section --> */}
      <WhyChooseUs />
      {/* <!-- Portfolio --> */}
      <RevealOnScroll>
        <Portfolio />
      </RevealOnScroll>
      {/* <!-- ABOUT SECTION --> */}
      {/* <About /> */}

      {/* <!-- Call To Action --> */}
      <CallToAction />

      {/* <!-- FAQ --> */}
      <FaqSection />

      {/* <!-- Testimonials --> */}
      <TestimonialSection />

      {/* <!-- Compact Stats Section --> */}
      <CompactSection />
      {/* <!-- Contact Section --> */}
      <ContactSection />
    </>
  );
};

export default Home;
