import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <>
    <section className="py-16 lg:py-24 bg-sky-950 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* <!-- Left Content --> */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
      <p className="mb-6 text-gray-200 leading-relaxed">
        With years of expertise, we don't just publish books — we give stories a soul,
        turning them into bestsellers. Whether you're a debut writer or a seasoned
        author, we make your publishing journey successful. Dream it, write it,
        and let us handle the rest!
      </p>
      <ul className="space-y-3">
        <li className="flex items-start">
            <FaCheckCircle className="text-rose-500 mt-1 mr-3 text-xl" />
          <p><strong>Quality Work</strong> – Expertly crafted books with precision and creativity.</p>
        </li>
        <li className="flex items-start">
            <FaCheckCircle className="text-rose-500 mt-1 mr-3 text-xl" />
          <p><strong>Timely Delivery</strong> – Always on schedule, never a missed deadline.</p>
        </li>
        <li className="flex items-start">
            <FaCheckCircle className="text-rose-500 mt-1 mr-3 text-xl" />
          <p><strong>Customer Satisfaction</strong> – Your vision, our commitment – guaranteed.</p>
        </li>
        <li className="flex items-start">
            <FaCheckCircle className="text-rose-500 mt-1 mr-3 text-xl" />
          <p><strong>100% Ownership</strong> – You own every word, no hidden clauses.</p>
        </li>
      </ul>
    </div>

    {/* <!-- Right Video --> */}
    <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-video">
      <iframe
        className="absolute inset-0 w-full h-full rounded-2xl"
        src="https://www.youtube.com/embed/kfwlBDIEgIU"
        title="Why Choose Us Video"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</section>
    </>
  )
}

export default WhyChooseUs