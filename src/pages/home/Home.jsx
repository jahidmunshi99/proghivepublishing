import About from "../About";
import MediaCoverage from "../MediaCoverage";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import ServicesSection from "./ServicesSection";
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
      <section className="py-20 lg:py-24 bg-sky-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-rose-500 font-semibold tracking-widest uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold mb-16">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-rose-600 text-gray-800">
              <div className="text-2xl text-yellow-500 mb-4">★★★★★</div>
              <p className="italic mb-6">
                “From editing to publishing, the process was smooth and
                stress-free. I felt supported every step of the way!”
              </p>
              <p className="font-bold text-lg">Emma Harrison</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-rose-600 text-gray-800">
              <div className="text-2xl text-yellow-500 mb-4">★★★★★</div>
              <p className="italic mb-6">
                “They transformed my manuscript into a beautifully formatted
                eBook that looks amazing on every platform!”
              </p>
              <p className="font-bold text-lg">David Thompson</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-rose-600 text-gray-800">
              <div className="text-2xl text-yellow-500 mb-4">★★★★★</div>
              <p className="italic mb-6">
                “I had a story in mind but didn’t know where to start. Their
                team helped bring my vision to life effortlessly!”
              </p>
              <p className="font-bold text-lg">Sophia Bennett</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- FAQ --> */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm uppercase text-rose-600 tracking-widest mb-2">
            — Anything to Ask
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Before contacting us, check whether your question is already
            answered below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {/* <!-- FAQ Item --> */}
          <div className="flex justify-between items-center py-5 cursor-pointer hover:text-rose-600 transition">
            <span className="text-lg text-gray-800">
              How can I publish my book?
            </span>
            <span className="text-rose-600 text-xl font-bold">+</span>
          </div>
          <div className="flex justify-between items-center py-5 cursor-pointer hover:text-rose-600 transition">
            <span className="text-lg text-gray-800">
              How to publish a book on Amazon?
            </span>
            <span className="text-rose-600 text-xl font-bold">+</span>
          </div>
          <div className="flex justify-between items-center py-5 cursor-pointer hover:text-rose-600 transition">
            <span className="text-lg text-gray-800">
              How much does it cost to publish a book?
            </span>
            <span className="text-rose-600 text-xl font-bold">+</span>
          </div>
          <div className="flex justify-between items-center py-5 cursor-pointer hover:text-rose-600 transition">
            <span className="text-lg text-gray-800">
              How to get a publisher for a book?
            </span>
            <span className="text-rose-600 text-xl font-bold">+</span>
          </div>
          <div className="flex justify-between items-center py-5 cursor-pointer hover:text-rose-600 transition">
            <span className="text-lg text-gray-800">
              What role does the editor play in the publishing process?
            </span>
            <span className="text-rose-600 text-xl font-bold">+</span>
          </div>
        </div>
      </section>

      {/* <!-- Compact Stats Section --> */}
      <section className="py-12 bg-sky-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Our Achievements
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* <!-- Projects Completed --> */}
            <div className="flex flex-col items-center bg-sky-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-2">
                <i className="fas fa-briefcase"></i>
              </div>
              <div
                className="text-3xl font-extrabold counter"
                data-target="150"
              >
                0
              </div>
              <p className="mt-2 font-semibold text-gray-300">
                Projects Completed
              </p>
            </div>

            {/* <!-- Happy Customers --> */}
            <div className="flex flex-col items-center bg-sky-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-2">
                <i className="fas fa-smile"></i>
              </div>
              <div
                className="text-3xl font-extrabold counter"
                data-target="120"
              >
                0
              </div>
              <p className="mt-2 font-semibold text-gray-300">
                Happy Customers
              </p>
            </div>

            {/* <!-- Published Books --> */}
            <div className="flex flex-col items-center bg-sky-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-4xl mb-2">
                <i className="fas fa-book"></i>
              </div>
              <div
                className="text-3xl font-extrabold counter"
                data-target="200"
              >
                0
              </div>
              <p className="mt-2 font-semibold text-gray-300">
                Published Books
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact Section --> */}
      <section className="py-20 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* <!-- Left Content --> */}
          <div>
            <p className="text-rose-600 font-semibold tracking-widest mb-3 uppercase">
              Contact Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-6">
              Publish Your Book Professionally in No Time — Schedule Your
              <span className="text-rose-600">Free Consultation!</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We’re here to give your book the recognition it deserves. Reach
              out to our expert team at
              <a
                href="mailto:support@bookpropublishing.com"
                className="text-rose-600 font-semibold hover:underline"
              >
                support@bookpropublishing.com
              </a>
              or send us your project details below.
            </p>
          </div>

          {/* <!-- Contact Form --> */}
          <div className="bg-sky-950 p-8 md:p-10 rounded-2xl shadow-2xl">
            <h3 className="text-white text-2xl font-semibold mb-8 text-center">
              Let’s Get Started
            </h3>

            <form className="space-y-5">
              {/* <!-- Name & Email --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
                />
              </div>

              {/* <!-- Phone & Service --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
                />
                <select
                  className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 
            focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
                >
                  <option disabled selected>
                    Select Service
                  </option>
                  <option>Publishing</option>
                  <option>Marketing</option>
                </select>
              </div>

              {/* <!-- Message --> */}
              <textarea
                placeholder="About Your Project"
                rows="5"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 
          focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
              ></textarea>

              {/* <!-- Button --> */}
              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg font-semibold text-lg 
          tracking-wide transition duration-300 shadow-md hover:shadow-lg"
              >
                → Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
