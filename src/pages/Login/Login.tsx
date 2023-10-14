import { FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../componets/Button/Button';
import { Headling } from '../../componets/Headling/Headling';
import Input from '../../componets/Input/Input';
import { AppDispatch, RootState } from '../../store/store';
import { login, userActions } from '../../store/user.slice';
import styles from './Login.module.scss';
export type LoginForm = {
	email: {
		value: string;
	};
	password: {
		value: string;
	};
};
export const Login = () => {
	// const [error, setError] = useState<string | null>();

	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const { jwt, loginErrorMessage } = useSelector((s: RootState) => s.user);

	useEffect(() => {
		if (jwt) {
			navigate('/');
		}
	}, [jwt, navigate]);

	const submit = (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearLoginError());
		// setError(null);
		const target = e.target as typeof e.target & LoginForm;
		const { email, password } = target;
		// console.log(email.value, password.value);
		sendLogin(email.value, password.value);
	};
	const sendLogin = async (email: string, password: string) => {
		dispatch(login({ email, password }));

		// try {
		// 	const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
		// 		email,
		// 		password,
		// 	});
		// 	dispatch(userActions.addJwt(data.access_token));
		// 	// localStorage.setItem('jwt', data.access_token);
		// 	navigate('/');
		// } catch (error) {
		// 	if (error instanceof AxiosError) {
		// 		console.log(error);
		// 		setError(error.response?.data.message);
		// 	}
		// }
	};

	return (
		<div className={styles.login}>
			<Headling>Login</Headling>
			{loginErrorMessage && <div className={styles.error}>{loginErrorMessage}</div>}
			<form className={styles.form} onSubmit={submit}>
				<div className={styles.field}>
					<label htmlFor="email"> Email</label>
					<Input id="email" name="email" placeholder="Email" autoComplete="username" />
				</div>
				<div className={styles.field}>
					<label htmlFor="password"> Password</label>
					<Input
						id="password"
						name="password"
						type="password"
						placeholder="Parola"
						autoComplete="current-password"
					/>
				</div>
				<Button appearence="big">Intra</Button>
			</form>
			<div className={styles.links}>
				<div>Nu ai account ?</div>
				<Link to="/auth/register"> Fa unul </Link>
			</div>
		</div>
	);
};
