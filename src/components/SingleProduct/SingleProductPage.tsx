import { Link, useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import products from "../../data/products.json";
import { ROUTES } from "../../utils/routes";

const SingleProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.products.find((product) => product.id === productId);

  if (!product) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-white md:text-[40px]">
        ❌ Product not found...
        <div>Something getting wrong 🤷‍♂️</div>
        <Link
          className="mt-[20px] rounded-[15px] border-2 border-black p-[20px]"
          to={ROUTES.SHOP}
        >
          Back To Shop 🚀
        </Link>
      </div>
    );
  }

  return <SingleProduct product={product} />;
};

export default SingleProductPage;
