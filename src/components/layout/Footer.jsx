import { Link } from "react-router";
import { Icons } from "../common/Icons";

const Footer = () => {
  return (
    <>
      <footer className="bg-sky-950 text-white">
        {/* ===== Main Footer ===== */}
        <div className="container">
          <div className="px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* About */}
            <div>
              <Link to="/">
                <img className="w-40" src={Icons.Logo} alt="" />
              </Link>
              <p className="text-slate-300 text-sm leading-relaxed mt-3">
                Professional book formatting, publishing, and design services
                for authors worldwide.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="hover:text-white transition">
                  <Link to="/service/self-publishing">Formatting</Link>
                </li>
                <li className="hover:text-white transition">
                  <Link to="">Editing</Link>
                </li>
                <li className="hover:text-white transition">
                  <Link to="/service/designer">Cover Design</Link>
                </li>
                <li className="hover:text-white transition">
                  <Link to="/service/self-publishing">Publishing</Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                <li className="hover:text-white transition">
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:text-white transition">
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="hover:text-white transition">
                  <Link to="/testimonial">Testimonials</Link>
                </li>
                <li className="hover:text-white transition">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>Email: info@proghive.com</li>
                <li>WhatsApp: +880 XXXX-XXXX</li>
                <li>Worldwide Service</li>
              </ul>
            </div>
          </div>
        </div>
        {/* ===== Bottom Bar ===== */}
        <div className="border-t border-sky-800">
          <div className="container">
            <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
              <span className="text-slate-400 text-center sm:text-left">
                © {new Date().getFullYear()} Proghive. All rights reserved.
              </span>
              <div className="flex gap-2">
                <Link
                  to="/privacy-policy"
                  className="text-slate-400 hover:text-white transition"
                >
                  Privacy Policy
                </Link>{" "}
                |
                <Link
                  to="/privacy-policy"
                  className="text-slate-400 hover:text-white transition"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
