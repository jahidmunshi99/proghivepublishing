import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-950 px-4">
      <div className="text-center max-w-xl">
        {/* 404 Number */}
        <h1 className="text-[120px] md:text-[160px] font-extrabold text-rose-600 leading-none">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-300 mt-4 mb-8">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Action */}
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition shadow-lg hover:shadow-xl"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
