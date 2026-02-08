import About from "../About";
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
      {/* <!-- ABOUT SECTION --> */}
      <About />
      {/* <!-- Why Choose Us Section --> */}
      <WhyChooseUs />
      {/* <!-- Media Coverage Section --> */}
      <MediaCoverage />
      {/* <!-- Services Section --> */}
      <ServicesSection />

      {/* <!-- Our Process Section --> */}
      <section className="bg-white py-20 px-6 sm:px-8 lg:px-24">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600">
            Learn About Our Professional Book Publishing Steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Single Step --> */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Manuscript Finalization
            </h3>
            <p className="text-gray-600">
              We refine or create your manuscript for maximum impact.
            </p>
          </div>

          {/* <!-- Duplicate and update steps --> */}
        </div>
      </section>

      {/* <!-- Ebook Marketing Section --> */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Get More Sales with Our E-book Marketing Services
            </h2>
            <p className="text-gray-600 mb-4">
              Your book deserves global recognition — our marketing ensures it
              shines everywhere.
            </p>
            <p className="text-gray-600 mb-8">
              We don’t just help publish — we position your work for success.
              Let's give your book the audience it deserves.
            </p>
            <a
              href="#"
              className="inline-flex items-center bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition"
            >
              → Get a Quote Today!
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 -z-10 rounded-full bg-rose-500/20 blur-3xl"></div>
              <img
                src="https://bookpropublishing.com/wp-content/uploads/2025/02/publishYourBook_new-768x709.webp"
                alt="Marketing Illustration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Call To Action --> */}
      <section className="py-16 bg-sky-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Start Your eBook Project With Us Today!
            </h2>
            <p className="text-lg text-gray-200">
              We Promise the Success Your Book Deserves!
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center bg-rose-600 hover:bg-rose-700 text-white py-3 px-8 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            → Get Free Consultation Now!
          </a>
        </div>
      </section>

      {/* <!-- Portfolio --> */}
      <Portfolio />

      {/* <!-- Testimonials --> */}
      <TestimonialSection />

      {/* <!-- FAQ --> */}
      <FaqSection />

      {/* <!-- Compact Stats Section --> */}
      <CompactSection />
      {/* <!-- Contact Section --> */}
      <ContactSection />
    </>
  );
};

export default Home;
