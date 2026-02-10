import { Link } from "react-router";
import { Icons } from "../../components/common/Icons.js";
const ServicesSection = () => {
  return (
    <>
      <section className="py-20 bg-[gradient-to-b] from-sky-950 to-sky-900 text-white container">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-rose-500 text-4xl font-semibold tracking-widest uppercase mb-3">
            Save Your Time & Energy
          </h2>
          <h3 className="text-sky-950 text-[1.2rem] font-bold pt-5 pb-10">
            Simplify your hiring journey without getting exhausted by partnering
            with a skilled <br></br> Self-publishing, Design, and Marketing
            specialist.
          </h3>
          {/** Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20">
            {/* Service Card */}
            <Link to="/service/self-publishing">
              <div className="group relative w-full h-52 rounded-xl border border-gray-200 overflow-hidden cursor-pointer">
                {/* Default View */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-white
      transition-all duration-500 ease-in-out
      group-hover:opacity-0 group-hover:scale-95"
                >
                  <Icons.BookIcon size="50" className="text-sky-950 mb-2" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Self Publishing
                  </h3>
                </div>

                {/* Hover View */}
                <div
                  className="absolute inset-0 bg-sky-950 flex flex-col items-center justify-center px-6 text-white
      opacity-0 translate-y-6
      transition-all duration-500 ease-out
      group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    Self Publishing
                  </h3>
                  <p className="text-sm text-center leading-relaxed">
                    Complete self-publishing solutions including formatting,
                    cover design, and KDP upload support.
                  </p>
                </div>
              </div>
            </Link>
            <div className="group relative w-full h-52 rounded-xl border border-gray-200 overflow-hidden cursor-pointer">
              {/* Default View */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-white
      transition-all duration-500 ease-in-out
      group-hover:opacity-0 group-hover:scale-95"
              >
                <Icons.CodeLaptop size="50" className="text-sky-950 mb-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Developer
                </h3>
              </div>

              {/* Hover View */}
              <div
                className="absolute inset-0 bg-sky-950 flex flex-col items-center justify-center px-6 text-white
      opacity-0 translate-y-6
      transition-all duration-500 ease-out
      group-hover:opacity-100 group-hover:translate-y-0"
              >
                <h3 className="text-xl font-semibold mb-2">Self Publishing</h3>
                <p className="text-sm text-center leading-relaxed">
                  Complete self-publishing solutions including formatting, cover
                  design, and KDP upload support.
                </p>
              </div>
            </div>
            <div className="group relative w-full h-52 rounded-xl border border-gray-200 overflow-hidden cursor-pointer">
              {/* Default View */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-white
      transition-all duration-500 ease-in-out
      group-hover:opacity-0 group-hover:scale-95"
              >
                <Icons.Marketer size="50" className="text-sky-950 mb-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Marketer
                </h3>
              </div>

              {/* Hover View */}
              <div
                className="absolute inset-0 bg-sky-950 flex flex-col items-center justify-center px-6 text-white
      opacity-0 translate-y-6
      transition-all duration-500 ease-out
      group-hover:opacity-100 group-hover:translate-y-0"
              >
                <h3 className="text-xl font-semibold mb-2">Self Publishing</h3>
                <p className="text-sm text-center leading-relaxed">
                  Complete self-publishing solutions including formatting, cover
                  design, and KDP upload support.
                </p>
              </div>
            </div>
            <Link to="/service/designer">
              <div className="group relative w-full h-52 rounded-xl border border-gray-200 overflow-hidden cursor-pointer">
                {/* Default View */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-white
      transition-all duration-500 ease-in-out
      group-hover:opacity-0 group-hover:scale-95"
                >
                  <Icons.Edit size="45" className="text-sky-950 mb-2" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Designer
                  </h3>
                </div>

                {/* Hover View */}
                <div
                  className="absolute inset-0 bg-sky-950 flex flex-col items-center justify-center px-6 text-white
      opacity-0 translate-y-6
      transition-all duration-500 ease-out
      group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    Self Publishing
                  </h3>
                  <p className="text-sm text-center leading-relaxed">
                    Complete self-publishing solutions including formatting,
                    cover design, and KDP upload support.
                  </p>
                </div>
              </div>
            </Link>
            <div className="group relative w-full h-52 rounded-xl border border-gray-200 overflow-hidden cursor-pointer">
              {/* Default View */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-white
      transition-all duration-500 ease-in-out
      group-hover:opacity-0 group-hover:scale-95"
              >
                <Icons.CustomerSupport
                  size="45"
                  className="text-sky-950 mb-2"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  Admin Support
                </h3>
              </div>

              {/* Hover View */}
              <div
                className="absolute inset-0 bg-sky-950 flex flex-col items-center justify-center px-6 text-white
      opacity-0 translate-y-6
      transition-all duration-500 ease-out
      group-hover:opacity-100 group-hover:translate-y-0"
              >
                <h3 className="text-xl font-semibold mb-2">Self Publishing</h3>
                <p className="text-sm text-center leading-relaxed">
                  Complete self-publishing solutions including formatting, cover
                  design, and KDP upload support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
