import { useNavigate } from 'react-router-dom';
import { Button } from '../../componets/Button/Button';
import styles from './Success.module.scss';

export const Success = () => {
	const navigator = useNavigate();
	return (
		<div className={styles.success}>
			<img src="/pizza.png" alt="pizza img" />
			<div className={styles.text}>tat zbs</div>
			<Button appearence="big" onClick={() => navigator('/')}>
				Comanda noua ?
			</Button>
		</div>
	);
};
