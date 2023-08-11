import { Link, useParams } from 'react-router-dom';
import SingleProduct from './SingleProduct'; // Ваш компонент SingleProduct
import products from '../../data/products.json';
import { ROUTES } from '../../utils/routes';

const SingleProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.products.find((product) => product.id === productId);

  if (!product) {
    return <div className='flex flex-col items-center justify-center h-screen bg-white text-[40px]'>❌ Product not found... 
      <div>Something getting wrong 🤷‍♂️</div>
      <Link className='border-2 mt-[20px] p-[20px] border-black rounded-[15px]' to={ROUTES.SHOP}>Back To Shop 🚀</Link>
    </div>;
  }

  return <SingleProduct product={product} />;
};

export default SingleProductPage;





