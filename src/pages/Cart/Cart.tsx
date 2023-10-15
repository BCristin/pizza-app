import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../componets/Button/Button';
import { CartItem } from '../../componets/CartItem/CartItem';
import { Headling } from '../../componets/Headling/Headling';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { cartActions } from '../../store/cart.slice';
import { AppDispatch, RootState } from '../../store/store';
import styles from './Cart.module.scss';
const DELIVERY_FEE = 169;
export const Cart = () => {
	const [cartProducts, setCartProducts] = useState<Product[]>([]);
	const items = useSelector((s: RootState) => s.cart.items);
	const jwt = useSelector((s: RootState) => s.user.jwt);
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const total = items
		.map((i) => {
			const product = cartProducts.find((p) => p.id === i.id);
			if (product) {
				return product.price * i.count;
			}
			return 0;
		})
		.reduce((acc, item) => (acc += item), 0);

	const getItem = async (id: number) => {
		const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
		return data;
	};

	const loadAllItems = async () => {
		const res = await Promise.all(items.map((i) => getItem(i.id)));
		setCartProducts(res);
	};
	const checkout = async () => {
		await axios.post(
			`${PREFIX}/order`,
			{ products: items },
			{ headers: { Authorization: `Bearer ${jwt}` } },
		);
		dispatch(cartActions.clean());
		navigate('/success');
	};

	useEffect(() => {
		loadAllItems();
	}, [items]);

	return (
		<>
			<Headling className={styles['headling']}>Cart</Headling>
			{items.map((i) => {
				const product = cartProducts.find((p) => p.id === i.id);
				if (!product) {
					return;
				}
				return <CartItem count={i.count} {...product} key={product.id} />;
			})}
			<div className={styles.line}>
				<div className={styles.text}>Total</div>
				<div className={styles.price}>
					{total}
					<span> ₽</span>
				</div>
			</div>
			<hr className={styles.hr} />
			<div className={styles.line}>
				<div className={styles.text}>Livrare</div>
				<div className={styles.price}>
					{DELIVERY_FEE}
					<span> ₽</span>
				</div>
			</div>
			<hr className={styles.hr} />
			<div className={styles.line}>
				<div className={styles.text}>
					Total
					<span className={styles['total-count']}>
						({items.reduce((acc, item) => (acc += item.count), 0)})
					</span>
				</div>
				<div className={styles.price}>
					{total + DELIVERY_FEE}
					<span> ₽</span>
				</div>
			</div>
			<div className={styles.checkout}>
				<Button appearence="big" onClick={checkout}>
					fa comanda
				</Button>
			</div>
		</>
	);
};
