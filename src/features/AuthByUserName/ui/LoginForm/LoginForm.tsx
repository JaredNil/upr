import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback, useEffect, useState } from 'react';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/service/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selector/getLoginState';
import { loginAction } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string;
}

const LoginForm: React.FC<LoginFormProps> = memo((props: LoginFormProps) => {
	const { className } = props;
	const { t } = useTranslation();

	const dispatch = useDispatch();
	const loginForm = useSelector(getLoginState);
	const { username, password, isLoading, error } = loginForm;

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginAction.setUserName(value));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginAction.setPassword(value));
		},
		[dispatch]
	);

	const onLoginClick = useCallback((): void => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		dispatch<any>(loginByUsername({ username, password }));
	}, [dispatch, username, password]);

	const [errorState, setErrorState] = useState([]);

	useEffect(() => {
		setErrorState([error]);
	}, [error]);

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Text title="Окно авторизации" />
			<Input
				type="text"
				className={cls.input}
				placeholder={t('Введите username')}
				autoFocus
				onChange={onChangeUsername}
				value={loginForm.username}
			/>
			<Input
				type="text"
				className={cls.input}
				placeholder={t('Введите password')}
				onChange={onChangePassword}
				value={loginForm.password}
			/>
			{/* {errorState.map((_, i) => (
				<Text
					title="erors"
					textError={{ message: error }}
					theme={TextTheme.ERROR}
					key={error}
				/>
			))} */}
			<Button
				className={cls.loginBtb}
				onClick={onLoginClick}
				disabled={isLoading}
			>
				{t('Войти')}
			</Button>
		</div>
	);
});

export default LoginForm;
