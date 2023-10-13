import { ProductCard } from '../../../componets/ProductCard/ProductCard';
import styles from './MenuList.module.scss';
import { MenuListProps } from './MenuList.props';

export const MenuList = ({ products }: MenuListProps) => {
	return (
		<div className={styles.wrapper}>
			{products.map((p) => (
				<ProductCard
					key={p.id}
					id={p.id}
					name={p.name}
					description={p.ingredients.join(', ')}
					rating={p.rating}
					price={p.price}
					image={p.image}
				/>
			))}
		</div>
	);
};
