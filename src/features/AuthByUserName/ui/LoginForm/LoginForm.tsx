import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect, useState } from 'react';
import Text from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import {
	loginAction,
	loginReducer,
	loginByUsername,
	getLoginUsername,
	getLoginPassword,
	getLoginIsLoading,
	getLoginError,
} from 'features/AuthByUserName';

import DynamicModuleLoader, {
	ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
	className?: string;
}

const initialReducers: ReducerList = {
	login: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = memo((props: LoginFormProps) => {
	const { className } = props;
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginIsLoading);
	const error = useSelector(getLoginError);

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
		<DynamicModuleLoader reducers={initialReducers}>
			<div className={classNames(cls.LoginForm, {}, [className])}>
				<Text title="Окно авторизации" />
				<Input
					type="text"
					className={cls.input}
					placeholder={t('Введите username')}
					autoFocus
					onChange={onChangeUsername}
					value={username}
				/>
				<Input
					type="text"
					className={cls.input}
					placeholder={t('Введите password')}
					onChange={onChangePassword}
					value={password}
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
		</DynamicModuleLoader>
	);
});

export default LoginForm;
