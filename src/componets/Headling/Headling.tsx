import cn from 'classnames';
import styles from './Headling.module.scss';
import { HeadlinProps } from './Headling.props';

export const Headling = ({ children, className, ...props }: HeadlinProps) => {
	return (
		<h1 className={cn(className, styles.h1)} {...props}>
			{children}
		</h1>
	);
};
