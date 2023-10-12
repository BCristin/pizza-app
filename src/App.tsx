import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Button } from './componets/Button/Button';
import Input from './componets/Input/Input';
import { Layout } from './layout/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { Menu } from './pages/Menu/Menu';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <Menu /> },
			{ path: '/cart', element: <Cart /> },
			{ path: '*', element: <Error /> },
		],
	},
]);
function App() {
	const [counter, setcounter] = useState<number>(0);
	// <number> daca de zis exact ce e, dar default ea typul din caloarea default

	return (
		<div className="container">
			<RouterProvider router={router} />

			<Input placeholder="email"></Input>
			<Button onClick={() => setcounter(counter - 1)}>-1 ({counter})</Button>
			<Button appearence="big" onClick={() => setcounter(counter + 1)}>
				+1
			</Button>
		</div>
	);
}

export default App;
