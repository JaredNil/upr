import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getProfileError, getProfileIsLoading, getProfileData, ProfileCard, fetchProfileData, profileReducer, profileAction } from 'entities/Profile';

import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import cls from './ProfilePage.module.scss';
import { ProfilePageHeader } from 'entities/Profile';

interface ProfilePageProps {
	className?: string;
}

// async chunk reducer
const reducers: ReducerList = { profile: profileReducer };

const ProfilePage: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
	const { className } = props;
	const { t } = useTranslation();

	const dispatch = useAppDispatch();

	const data = useSelector(getProfileData) || undefined;
	const errorData = useSelector(getProfileError) || undefined;
	const isLoading = useSelector(getProfileIsLoading) || undefined;

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	const onChangeFirstname = useCallback(
		(value: string) => {
			dispatch(profileAction.updateProfile({ first: value || '' }));
		},
		[dispatch]
	);
	const onChangeLastname = useCallback(
		(value: string) => {
			dispatch(profileAction.updateProfile({ lastname: value || '' }));
		},
		[dispatch]
	);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.ProfilePage, {}, [className])}>
				<ProfilePageHeader />
				<ProfileCard
					data={data}
					isLoading={isLoading}
					errorData={errorData}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
				/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
