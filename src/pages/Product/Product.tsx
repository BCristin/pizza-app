import { useLoaderData } from 'react-router-dom';
import { Product as IProduct } from '../../interfaces/product.interface';

export const Product = () => {
	// const { id } = useParams();
	const data = useLoaderData() as IProduct;
	return <div>Product {data.name}</div>;
};
