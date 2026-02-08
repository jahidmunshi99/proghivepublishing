const ContactSection = () => {
  return (
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
            We’re here to give your book the recognition it deserves. Reach out
            to our expert team at
            <a
              href="mailto:support@bookpropublishing.com"
              className="text-rose-600 font-semibold hover:underline mx-1"
            >
              support@proghivepublishing.com
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
  );
};

export default ContactSection;
