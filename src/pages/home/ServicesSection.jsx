const ServicesSection = () => {
  return (
    <section className="py-20 bg-[gradient-to-b] from-sky-950 to-sky-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-rose-500 font-semibold tracking-widest uppercase mb-3">
          Our Complete Book Publisher’s Services
        </p>
        <h2 className="text-4xl font-bold mb-16">
          We Take Every Project to Success with Our Professional & Affordable
          Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- Reusable Service Card --> */}
          <div className="group bg-white text-gray-800 rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl hover:bg-sky-800 hover:text-white transition-all duration-300">
            <svg
              className="w-10 h-10 text-rose-600 group-hover:text-white transition-colors mb-4"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M4 4.5A2.5 2.5 0 0 1 6.5 7H20v10H6.5A2.5 2.5 0 0 0 4 19.5z"></path>
            </svg>
            <h3 className="font-semibold text-lg mb-2">
              Children’s Book Service
            </h3>
            <p className="text-sm opacity-80 group-hover:opacity-100">
              Get appealing covers that grab every eye at first glance.
            </p>
          </div>

          {/* <!-- Copy & change for other services --> */}
          <div className="group bg-white text-gray-800 rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl hover:bg-sky-800 hover:text-white transition-all duration-300">
            <svg
              className="w-10 h-10 text-rose-600 group-hover:text-white transition-colors mb-4"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M4 4.5A2.5 2.5 0 0 1 6.5 7H20v10H6.5A2.5 2.5 0 0 0 4 19.5z"></path>
            </svg>
            <h3 className="font-semibold text-lg mb-2">
              Ghost Writing Services
            </h3>
            <p className="text-sm opacity-80 group-hover:opacity-100">
              Turn your idea into a compelling and professional story.
            </p>
          </div>

          {/* <!-- Add more cards here --> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
