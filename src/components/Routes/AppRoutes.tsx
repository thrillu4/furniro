import { Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import { ROUTES } from "../../utils/routes"
import Shop from "../Shop/Shop"
import Comparison from "../Comparison/Comparison"
import Blog from "../Blog/Blog"
import Checkout from "../Checkout/Checkout"
import Cart from "../Cart/Cart"
import SingleProduct from "../SingleProduct/SingleProduct"
import Contact from "../Contact/Contact"
import PrivacyPolicies from '../PrivacyPolicies/PrivacyPolicies';

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path={ROUTES.SHOP} element={<Shop product={{
        image: "",
        title: "",
        subtitle: "",
        id: "",
        price: "",
        promotional: false,
        promotionalPrice: "",
        percent: undefined,
        newProduct: false
      }}/>}/>
        <Route path={ROUTES.SingleProduct} element={<SingleProduct/>}/>
        <Route path={ROUTES.CART} element={<Cart/>}/>
        <Route path={ROUTES.CHECKOUT} element={<Checkout/>}/>
        <Route path={ROUTES.CONTACT} element={<Contact/>}/>
        <Route path={ROUTES.BLOG} element={<Blog/>}/>
        <Route path={ROUTES.COMPARISON} element={<Comparison/>}/>
        <Route path={ROUTES.PrivacyPolicies} element={<PrivacyPolicies/>}/>
    </Routes>
  )
}

export default AppRoutes