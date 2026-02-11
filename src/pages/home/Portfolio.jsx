import SectionBg from "../../components/layout/SectionBg";
import { useAuth } from "../../hooks/useAuth";

const Portfolio = () => {
  const { showItems, handleLoadMore } = useAuth();
  const covers = [
    {
      id: 1,
      name: "cover-1",
      url: "https://bookpropublishing.com/wp-content/uploads/2025/01/Book1-new.webp",
    },
    {
      id: 2,
      name: "cover-1",
      url: "https://bookpropublishing.com/wp-content/uploads/2025/01/Book1-new.webp",
    },
    {
      id: 3,
      name: "cover-1",
      url: "https://bookpropublishing.com/wp-content/uploads/2025/01/Book1-new.webp",
    },
    {
      id: 4,
      name: "cover-1",
      url: "https://bookpropublishing.com/wp-content/uploads/2025/01/Book1-new.webp",
    },
    {
      id: 5,
      name: "cover-1",
      url: "https://bookpropublishing.com/wp-content/uploads/2025/01/Book1-new.webp",
    },
    {
      id: 6,
      name: "cover-1",
      url: "https://bookpropublishing.com/wp-content/uploads/2025/01/Book1-new.webp",
    },
    {
      id: 7,
      name: "cover-1",
      url: "https://bookpropublishing.com/wp-content/uploads/2025/01/Book1-new.webp",
    },
  ];

  return (
    <SectionBg>
      <section className="pt-15 lg:py-15 lg:mt-5 container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-rose-600 font-semibold tracking-widest uppercase mb-3">
            Our Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Get a Sneak Peek of Our Work
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-16 leading-relaxed">
            You’ll be amazed at how professionally we cater to our clients,
            delivering exactly what they need. Our expert team ensures a smooth
            and seamless publishing process.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Reusable portfolio item --> */}
            {covers.slice(0, showItems).map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-2xl transition-transform duration-400 ease-in-out hover:scale-[1.02]"
                >
                  <img
                    src={item.url}
                    alt="Book Sample 1"
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:pt-15 py-10 lg:py-2 text-center">
          {showItems < covers.length && (
            <button
              className="bg-rose-600 inline-flex items-center text-white py-3 px-8 rounded-lg font-semibold text-lg cursor-pointer hover:bg-rose-700 transition"
              onClick={() => handleLoadMore()}
            >
              See More..
            </button>
          )}
        </div>
      </section>
    </SectionBg>
  );
};

export default Portfolio;
