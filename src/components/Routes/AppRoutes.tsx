import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Spinner from "../Spinner/Spinner";
const Blog = lazy(() => import("../Blog/Blog"));
const SingleBlogPage = lazy(() => import("../Blog/SingleBlogPage"));
const Cart = lazy(() => import("../Cart/Cart"));
const Checkout = lazy(() => import("../Checkout/Checkout"));
const Comparison = lazy(() => import("../Comparison/Comparison"));
const Contact = lazy(() => import("../Contact/Contact"));
const Home = lazy(() => import("../Home/Home"));
const PrivacyPolicies = lazy(
  () => import("../PrivacyPolicies/PrivacyPolicies"),
);
const Shop = lazy(() => import("../Shop/Shop"));
const SingleProductPage = lazy(
  () => import("../SingleProduct/SingleProductPage"),
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Suspense fallback={<Spinner />}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path={ROUTES.SHOP} element={<Shop />} />
          <Route path={ROUTES.SingleProduct} element={<SingleProductPage />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path={ROUTES.SingleBlogPage} element={<SingleBlogPage />} />
          <Route path={ROUTES.COMPARISON} element={<Comparison />} />
          <Route path={ROUTES.PrivacyPolicies} element={<PrivacyPolicies />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AppRoutes;
