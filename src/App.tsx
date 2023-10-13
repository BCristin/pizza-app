import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout/Menu/Layout';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { Menu } from './pages/Menu/Menu';
import { Product } from './pages/Product/Product';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <Menu /> },
			{ path: '/cart', element: <Cart /> },
			{ path: '/product/:id', element: <Product /> },
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
