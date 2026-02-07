const About = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-red font-semibold tracking-widest mb-2">
              ABOUT US
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Professionalism, Creativity, and Artistry—We Create Masterpieces!
            </h2>
            <p className="mb-4 text-gray-600">
              At Book Pro Publishing, we believe every story has the power to
              inspire, captivate, and leave a lasting impact. Our team of
              professional writers, editors, and designers refine and promote
              your book to the highest standards.
            </p>
            <p className="mb-6 text-gray-600">
              Whether you're a first-time writer or an established author, we
              offer fully customized publishing services. Let’s create something
              extraordinary together!
            </p>
            <a
              href="#"
              className="bg-rose-600 inline-flex items-center text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-rose-700 transition"
            >
              → Request a Free Consultation
            </a>
          </div>

          <div className="lg:pl-8">
            <img
              src="https://bookpropublishing.com/wp-content/uploads/2025/02/aboutImg_new.webp"
              alt="Children's Book Spread"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
