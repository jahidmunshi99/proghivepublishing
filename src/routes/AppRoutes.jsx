import { BrowserRouter, Routes, Route } from "react-router";
import Home from '../pages/home/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Testimonial from '../pages/Testimonial';
import Portfolio from "../pages/home/Portfolio";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/testimonial' element={<Testimonial/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
    </Routes>
  )
}

export default AppRoutes