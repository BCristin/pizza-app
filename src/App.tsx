import axios from 'axios';
import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import { PREFIX } from './helpers/API';
import { RequireAuth } from './helpers/RequireAuth';
import { AuthLayout } from './layout/Auth/AuthLayout';
import { Layout } from './layout/Menu/Layout';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { Login } from './pages/Login/Login';
import { Product } from './pages/Product/Product';
import { Register } from './pages/Register/Register';
import { Success } from './pages/Success/Success';
import { store } from './store/store';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<RequireAuth>
				<Layout />
			</RequireAuth>
		),
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
					return defer({
						data: axios
							.get(`${PREFIX}/products/${params.id}`)
							.then((data) => data)
							.catch((e) => e),
					});
					// const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
					// return data;
				},
			},
			{ path: '/success', element: <Success /> },
			{ path: '*', element: <Error /> },
		],
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{ path: 'login', element: <Login /> },
			{ path: 'register', element: <Register /> },
		],
	},
]);
function App() {
	return (
		// <div className="container">
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
		// </div>
	);
}

export default App;
