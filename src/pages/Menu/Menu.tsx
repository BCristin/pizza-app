import axios, { AxiosError } from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
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
	const [filter, setFilter] = useState('');

	useEffect(() => {
		getMenu(filter);
	}, [filter]);

	const getMenu = async (name?: string) => {
		try {
			setIsLoading(true);
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
				params: { name },
			});
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
	const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
	};

	return (
		<>
			<div className={styles.head}>
				<Headling>Menu</Headling>
				<Search placeholder="Введите блюдо или состав" onChange={updateFilter}></Search>
			</div>
			<div className="">
				{error && <div>{error}</div>}
				{!isLoading ? <MenuList products={products} /> : <div>Loading</div>}
				{products.length === 0 && <div>nu a fost gasit asa ceva</div>}
			</div>
		</>
	);
};
export default Menu;
