import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Spinner from "../Spinner/Spinner";
import Shop from "../Shop/Shop";
import Home from "../Home/Home";
import Comparison from "../Comparison/Comparison";
import Blog from "../Blog/Blog";
import Checkout from "../Checkout/Checkout";
import Cart from "../Cart/Cart";
import Contact from "../Contact/Contact";
import PrivacyPolicies from "../PrivacyPolicies/PrivacyPolicies";
import SingleProductPage from "../SingleProduct/SingleProductPage";

const AppRoutes = () => {
  const location = useLocation();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setShowSpinner(true);
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path={ROUTES.SHOP}
          element={showSpinner ? <Spinner /> : <Shop product={{
            image: "",
            title: "",
            subtitle: "",
            id: "",
            price: "",
            promotional: false,
            promotionalPrice: "",
            percent: undefined,
            newProduct: false
          }} />}
        />
        <Route
          path={ROUTES.SingleProduct}
          element={showSpinner ? <Spinner /> : <SingleProductPage/>}
        />
        <Route
          path={ROUTES.CART}
          element={showSpinner ? <Spinner /> : <Cart />}
        />
        <Route path={ROUTES.CHECKOUT} element={showSpinner ? <Spinner /> : <Checkout />} />
        <Route path={ROUTES.CONTACT} element={showSpinner ? <Spinner /> : <Contact />} />
        <Route path={ROUTES.BLOG} element={showSpinner ? <Spinner /> : <Blog />} />
        <Route path={ROUTES.COMPARISON} element={showSpinner ? <Spinner /> : <Comparison />} />
        <Route path={ROUTES.PrivacyPolicies} element={showSpinner ? <Spinner /> : <PrivacyPolicies />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;


