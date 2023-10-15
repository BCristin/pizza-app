import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../../componets/Button/Button';
import { AppDispatch, RootState } from '../../store/store';
import { getProfile, userActions } from '../../store/user.slice';
import styles from './Layout.module.scss';

export const Layout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const profile = useSelector((s: RootState) => s.user.profile);
	const { items } = useSelector((s: RootState) => s.cart);

	useEffect(() => {
		dispatch(getProfile());
	}, [dispatch]);

	const logout = () => {
		// localStorage.removeItem('jwt');
		dispatch(userActions.logout());
		navigate('/auth/login');
	};
	return (
		<div className={styles.layout}>
			<div className={styles.sidebar}>
				<div className={styles.user}>
					<img src="/avatar.png" alt="avatar" />
					<div className={styles.name}>{profile?.name}</div>
					<div className={styles.email}>{profile?.email}</div>
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
					{items.reduce((acc, item) => (acc += item.count), 0)}
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
