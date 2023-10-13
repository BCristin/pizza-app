import axios from 'axios';
import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PREFIX } from './helpers/API';
import { Layout } from './layout/Menu/Layout';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { Product } from './pages/Product/Product';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<>Loading.. Suca.</>}>
						<Menu />
					</Suspense>
				),
			},
			{ path: '/cart', element: <Cart /> },
			{
				path: '/product/:id',
				element: <Product />,
				errorElement: <>Eroare</>,
				loader: async ({ params }) => {
					const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
					return data;
				},
			},
			{ path: '*', element: <Error /> },
		],
	},
]);
function App() {
	return (
		<div className="container">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
