import cn from 'classnames';
import { forwardRef } from 'react';
import styles from './Search.module.scss';
import { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
	{ isValid = true, className, ...props },
	ref,
) {
	return (
		<div className={styles['input-wrapper']}>
			<input
				ref={ref}
				className={cn(styles['input'], className, {
					[styles['invalid']]: isValid,
				})}
				{...props}
			/>
			<img className={styles.icon} src="/search-icon.svg" alt="icon glass" />
		</div>
	);
});

export default Search;
