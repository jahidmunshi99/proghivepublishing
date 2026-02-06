import { Route, Routes } from "react-router";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/home/Home";
import Portfolio from "../pages/home/Portfolio";
import Login from "../pages/Login";
import Services from "../pages/Services";
import Testimonial from "../pages/Testimonial";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/testimonial" element={<Testimonial />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
