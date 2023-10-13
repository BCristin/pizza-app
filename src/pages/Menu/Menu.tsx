import axios from 'axios';
import { useEffect, useState } from 'react';
import { Headling } from '../../componets/Headling/Headling';
import { ProductCard } from '../../componets/ProductCard/ProductCard';
import Search from '../../componets/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.scss';

export const Menu = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);

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
				{!isLoading ? (
					products.map((p) => (
						<ProductCard
							id={p.id}
							name={p.name}
							description={p.ingredients.join(', ')}
							rating={p.rating}
							price={p.price}
							image={p.image}
						/>
					))
				) : (
					<div>Loading</div>
				)}
			</div>
		</>
	);
};
