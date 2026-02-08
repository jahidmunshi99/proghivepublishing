import CountUp from "react-countup";

const CompactSection = () => {
  return (
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
            <div className="text-5xl font-bold counter">
              <CountUp end={100} duration={2.75} />
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
            <div className="text-5xl font-bold counter">
              <CountUp end={3500} duration={2.75} />
            </div>
            <p className="mt-2 font-semibold text-gray-300">Happy Customers</p>
          </div>

          {/* <!-- Published Books --> */}
          <div className="flex flex-col items-center bg-sky-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="text-4xl mb-2">
              <i className="fas fa-book"></i>
            </div>
            <div className="text-5xl font-bold counter">
              <CountUp end={5000} duration={2.75} /> +
            </div>
            <p className="mt-2 font-semibold text-gray-300">Published Books</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompactSection;
