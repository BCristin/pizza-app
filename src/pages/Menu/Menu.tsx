import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { Headling } from '../../componets/Headling/Headling';
import Search from '../../componets/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.scss';
import { MenuList } from './MenuList/MenuList';

const Menu = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | undefined>();

	const getMenu = async () => {
		try {
			setIsLoading(true);

			// const rest = await fetch(`${PREFIX}/products`);
			// if (!rest.ok) {
			// 	return;
			// }
			// const data = (await rest.json()) as Product[];
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);

			return;
		}
	};

	useEffect(() => {
		getMenu();
	}, []);

	return (
		<>
			<div className={styles.head}>
				<Headling>Menu</Headling>
				<Search placeholder="Введите блюдо или состав"></Search>
			</div>
			<div className="">
				{error && <div>{error}</div>}
				{!isLoading ? <MenuList products={products} /> : <div>Loading</div>}
			</div>
		</>
	);
};
export default Menu;
