import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
	getProfileError,
	getProfileIsLoading,
	ProfileCard,
	fetchProfileData,
	profileReducer,
	profileAction,
	getProfileReadOnly,
	getProfileForm,
} from 'entities/Profile';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import cls from './ProfilePage.module.scss';
import { ProfilePageHeader } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

interface ProfilePageProps {
	className?: string;
}

// async chunk reducer
const reducers: ReducerList = { profile: profileReducer };

const ProfilePage: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
	const { className } = props;
	const { t } = useTranslation();

	const dispatch = useAppDispatch();

	const formData = useSelector(getProfileForm);
	const errorData = useSelector(getProfileError);
	const isLoading = useSelector(getProfileIsLoading);
	const readonly = useSelector(getProfileReadOnly);

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	const onChangeFirstname = useCallback(
		(value?: string) => {
			dispatch(profileAction.updateProfile({ first: value || '' }));
		},
		[dispatch]
	);

	const onChangeLastname = useCallback(
		(value?: string) => {
			dispatch(profileAction.updateProfile({ lastname: value || '' }));
		},
		[dispatch]
	);

	const onChangeAge = useCallback(
		(value?: string | number) => {
			dispatch(profileAction.updateProfile({ age: Number(value) || '' }));
		},
		[dispatch]
	);

	const onChangeCity = useCallback(
		(value?: string) => {
			dispatch(profileAction.updateProfile({ city: value || '' }));
		},
		[dispatch]
	);

	const onChangeUsername = useCallback(
		(value?: string) => {
			dispatch(profileAction.updateProfile({ username: value || '' }));
		},
		[dispatch]
	);

	const onChangeAvatar = useCallback(
		(value?: string) => {
			dispatch(profileAction.updateProfile({ avatar: value || '' }));
		},
		[dispatch]
	);

	const onChangeCurrency = useCallback(
		(currency?: Currency) => {
			dispatch(profileAction.updateProfile({ currency: currency || Currency.RUB }));
		},
		[dispatch]
	);

	const onChangeCountry = useCallback(
		(country?: Country) => {
			dispatch(profileAction.updateProfile({ country: country || Country.Russia }));
		},
		[dispatch]
	);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.ProfilePage, {}, [className])}>
				<ProfilePageHeader />
				<ProfileCard
					data={formData || {}}
					isLoading={isLoading}
					errorData={errorData || undefined}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeAge={onChangeAge}
					onChangeCity={onChangeCity}
					onChangeUsername={onChangeUsername}
					onChangeAvatar={onChangeAvatar}
					onChangeCurrency={onChangeCurrency}
					onChangeCountry={onChangeCountry}
					readonly={readonly ? true : false}
				/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
