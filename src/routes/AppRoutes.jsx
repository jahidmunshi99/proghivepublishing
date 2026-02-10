import { Route, Routes } from "react-router";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Dashboard from "../pages/dashboard";
import Profile from "../pages/dashboard/Profile";
import UserBoard from "../pages/dashboard/UserBoard";
import Error from "../pages/Error";
import Home from "../pages/home/Home";
import Portfolio from "../pages/home/Portfolio";
import Login from "../pages/Login";
import CoverDesign from "../pages/services/CoverDesign";
import { SelfPublishingService } from "../pages/services/SelfPublishingService";
import Services from "../pages/services/Services";
import Testimonial from "../pages/Testimonial";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/testimonial" element={<Testimonial />}></Route>
      <Route
        path="/service/self-publishing"
        element={<SelfPublishingService />}
      ></Route>
      <Route path="/service/designer" element={<CoverDesign />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/login" element={<Login />}></Route>
      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<UserBoard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
