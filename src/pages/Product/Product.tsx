import { useParams } from 'react-router-dom';
import styles from './Product.module.scss';

export const Product = () => {
	const { id } = useParams();
	return <div className={styles}>Product {id}</div>;
};
