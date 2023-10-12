import cn from 'classnames';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button = ({ children, className, appearence = 'small', ...props }: ButtonProps) => {
	return (
		<button
			className={cn(styles.button, styles.accent, className, {
				[styles.small]: appearence === 'small',
				[styles.big]: appearence === 'big',
			})}
			{...props}>
			{children}
		</button>
	);
};
