import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { Product as IProduct } from '../../interfaces/product.interface';

export const Product = () => {
	// const { id } = useParams();
	const data = useLoaderData() as { data: IProduct };
	return (
		<>
			<Suspense fallback="Loading">
				<Await resolve={data.data}>
					{({ data }: { data: IProduct }) => {
						return <div>Product {data.name}</div>;
					}}
				</Await>
			</Suspense>
		</>
	);
};
