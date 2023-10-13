import { Headling } from '../../componets/Headling/Headling';
import Search from '../../componets/Search/Search';
import styles from './Menu.module.scss';

export const Menu = () => {
	return (
		<div className={styles.head}>
			<Headling>Menu</Headling>
			<Search placeholder="Введите блюдо или состав"></Search>
		</div>
	);
};
