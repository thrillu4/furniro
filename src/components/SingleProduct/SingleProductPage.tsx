import { useParams } from 'react-router-dom';
import SingleProduct from './SingleProduct'; // Ваш компонент SingleProduct
import products from '../../data/products.json';

const SingleProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.products.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <SingleProduct product={product} />;
};

export default SingleProductPage;





