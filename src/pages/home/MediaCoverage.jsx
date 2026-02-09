import Marquee from "react-fast-marquee";

const MediaCoverage = () => {
  return (
    <section className="bg-sky-950 text-center">
      {/* <div className="">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-rose-600 font-semibold tracking-widest uppercase mb-2">
            We Work With
          </p>

          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
            Our Published Books Have Been Covered By
          </h3>
        </div>
      </div> */}
      <Marquee>
        <div className="p-3">
          <div className="h-20 shadow rounded flex items-center justify-center text-2xl font-bold">
            <img
              src="https://brosmastery.com/wp-content/uploads/2023/07/4.png"
              alt=""
            />
          </div>
        </div>
        <div className="p-3">
          <div className="h-20 shadow rounded flex items-center justify-center text-2xl font-bold">
            <img
              src="https://brosmastery.com/wp-content/uploads/2023/07/8.png"
              alt=""
            />
          </div>
        </div>
        <div className="p-3">
          <div className="h-20 shadow rounded flex items-center justify-center text-2xl font-bold">
            <img
              src="https://brosmastery.com/wp-content/uploads/2023/07/5.png"
              alt=""
            />
          </div>
        </div>
        <div className="p-3">
          <div className="h-20 shadow rounded flex items-center justify-center text-2xl font-bold">
            <img
              src="https://brosmastery.com/wp-content/uploads/2023/07/4.png"
              alt=""
            />
          </div>
        </div>
        <div className="p-3">
          <div className="h-20 shadow rounded flex items-center justify-center text-2xl font-bold">
            <img
              src="https://brosmastery.com/wp-content/uploads/2023/07/3.png"
              alt=""
            />
          </div>
        </div>
        <div className="p-3">
          <div className="h-20 shadow rounded flex items-center justify-center text-2xl font-bold">
            <img
              src="https://brosmastery.com/wp-content/uploads/2023/07/3.png"
              alt=""
            />
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default MediaCoverage;
