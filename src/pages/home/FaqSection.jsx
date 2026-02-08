const FaqSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 container">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-sm uppercase text-rose-600 tracking-widest mb-2">
          — Anything to Ask
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500">
          Before contacting us, check whether your question is already answered
          below.
        </p>
      </div>

      {/** All Questions */}
      <div className="px-15">
        {/** Items-1 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        {/** Items-2 */}
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
