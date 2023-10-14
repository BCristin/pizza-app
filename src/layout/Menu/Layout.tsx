import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import cn from 'classnames';
import { Button } from '../../componets/Button/Button';
import styles from './Layout.module.scss';

export const Layout = () => {
	const navigate = useNavigate();
	const logout = () => {
		localStorage.removeItem('jwt');
		navigate('/auth/login');
	};
	return (
		<div className={styles.layout}>
			<div className={styles.sidebar}>
				<div className={styles.user}>
					<img src="/avatar.png" alt="avatar" />
					<div className={styles.name}>Vasile Muham</div>
					<div className={styles.email}>VasileMuham@gmail.com</div>
				</div>
				<div className={styles.menu}>
					<NavLink
						to="/"
						className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
						<img src="/menu-icon.svg" alt="icon menu" />
						Meniu
					</NavLink>
					<NavLink
						to="/cart"
						className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
						<img src="/cart-icon.svg" alt="icon cart" />
						Cart
					</NavLink>
				</div>
				<Button className={styles.exit} onClick={logout}>
					<img src="/exit-icon.svg" alt="icon exit" />
					Exit
				</Button>
			</div>
			<div className={styles.content}>
				<Outlet />
			</div>
		</div>
	);
};
