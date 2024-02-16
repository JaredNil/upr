import { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
	loginAction,
	loginReducer,
	loginByUsername,
	getLoginUsername,
	getLoginPassword,
	getLoginIsLoading,
	getLoginError,
} from 'features/AuthByUserName';

import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import Text from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
	className?: string;
	onSuccess: () => void;
}

const initialReducers: ReducerList = {
	login: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = memo((props: LoginFormProps) => {
	const { className, onSuccess } = props;
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

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

	const onLoginClick = useCallback(async () => {
		const result = await dispatch(loginByUsername({ username, password }));
		if (result.meta.requestStatus === 'fulfilled') onSuccess();
	}, [dispatch, username, password, onSuccess]);

	const [errorState, setErrorState] = useState<string[]>([]);

	useEffect(() => {
		if (error) {
			setErrorState([error]);
		}
	}, [error]);

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<div className={classNames(cls.LoginForm, {}, [className])}>
				<Text title="Окно авторизации" />
				<Input
					autoFocus
					type="text"
					className={cls.input}
					placeholder={t('Введите username')}
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
				<Button className={cls.loginBtb} onClick={onLoginClick} disabled={isLoading}>
					{t('Войти')}
				</Button>
			</div>
		</DynamicModuleLoader>
	);
});

export default LoginForm;
