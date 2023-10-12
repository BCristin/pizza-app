import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<>
			<div className="">
				<Link to="/">Meniu</Link>
				<Link to="/cart">Cart</Link>
			</div>
			<div className="">
				<Outlet />
			</div>
		</>
	);
};
