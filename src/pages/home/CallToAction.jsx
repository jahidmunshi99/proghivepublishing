const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
