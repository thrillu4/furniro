import { Routes, Route, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Shop from "../Shop/Shop";
import Home from "../Home/Home";
import Comparison from "../Comparison/Comparison";
import Blog from "../Blog/Blog";
import Checkout from "../Checkout/Checkout";
import Cart from "../Cart/Cart";
import Contact from "../Contact/Contact";
import PrivacyPolicies from "../PrivacyPolicies/PrivacyPolicies";
import SingleProductPage from "../SingleProduct/SingleProductPage";
import SingleBlogPage from "../Blog/SingleBlogPage";
import { AnimatePresence } from "framer-motion";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route
          path={ROUTES.SHOP}
          element={<Shop/>}
        />
        <Route
          path={ROUTES.SingleProduct}
          element={<SingleProductPage/>}
        />
        <Route
          path={ROUTES.CART}
          element={<Cart />}
        />
        <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.SingleBlogPage} element={<SingleBlogPage/>}/>
        <Route path={ROUTES.COMPARISON} element={<Comparison />} />
        <Route path={ROUTES.PrivacyPolicies} element={<PrivacyPolicies />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;


