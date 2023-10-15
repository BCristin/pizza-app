import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/cart.slice';
import { AppDispatch } from '../../store/store';
import styles from './ProductCard.module.scss';
import { ProductCardProps } from './ProductCard.props';

export const ProductCard = ({ id, name, description, image, price, rating }: ProductCardProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(cartActions.add(id));
	};
	return (
		<Link to={`/product/${id}`} className={styles.link}>
			<div className={styles.card}>
				<div className={styles.head} style={{ backgroundImage: `url('${image}')` }}>
					<div className={styles.price}>
						{price}
						<span className={styles.currency}> ₽</span>
					</div>
					<button onClick={add} className={styles['add-to-cart']}>
						<img src="/cart-button-icon.svg" alt="icon cart button" />
					</button>
					<div className={styles.rating}>
						{rating}
						<img src="/star-icon.svg" alt="icon star" />
					</div>
				</div>
				<div className={styles.footer}>
					<div className={styles.title}>{name}</div>
					<div className={styles.description}>{description}</div>
				</div>
			</div>
		</Link>
	);
};
