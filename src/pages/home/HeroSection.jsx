import { FaWhatsapp } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat pt-30 pb-10 container"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
        }}
      >
        <div className="absolute inset-0 bg-sky-950/90"></div>

        <div className="relative mx-auto ">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Text */}
            <div className="lg:w-1/2 text-white">
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6">
                Your Story Matters—
                <span className="block">
                  Turn It into a <span className="text-rose-600">Legacy!</span>
                </span>
                <span className="block">
                  with Our Book Publishing Services!
                </span>
              </h1>

              <p className="text-lg mb-8 opacity-90">
                Every story deserves to be shared. From publishing and design to
                marketing, our experts are here to bring your book to life and
                help your voice reach the world.
              </p>

              {/* Button + Icons */}
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="bg-rose-600 inline-flex items-center text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-rose-700 transition"
                >
                  → Let's Start!
                </a>

                <Link to="https://wa.me/8801717407216">
                  <FaWhatsapp className="text-green-500 hover:text-green-600 text-3xl transition" />
                </Link>

                <Link to="https://m.me/bookpropublishing">
                  <RiMessengerLine className="text-blue-500 hover:text-blue-600 text-3xl transition" />
                </Link>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg shadow-blue-200/30">
                <h2 className="text-sky-950 text-2xl font-bold mb-6 text-center">
                  We're here to help!
                </h2>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:outline-none"
                    />
                    <select className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:outline-none text-gray-700">
                      <option value="" disabled>
                        Select Service
                      </option>
                      <option>Editing</option>
                      <option>Ghost Writing</option>
                    </select>
                  </div>

                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:outline-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-rose-600 w-full inline-flex items-center justify-center text-white py-3 rounded-lg font-semibold text-lg hover:bg-rose-700 transition"
                  >
                    → Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
