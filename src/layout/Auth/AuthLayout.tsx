import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.scss';

export const AuthLayout = () => {
	return (
		<div className={styles.layout}>
			<div className={styles.logo}>
				<img src="/logo.svg" alt="logo icon" />
			</div>
			<div className={styles.content}>
				<Outlet />
			</div>
		</div>
	);
};
