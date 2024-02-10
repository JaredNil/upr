import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
	DynamicModuleLoader,
	ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, profileReducer } from 'entities/Profile';
import cls from './ProfilePage.module.scss';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from './../../../entities/Profile/ui/ProfileCard/ProfileCard';

interface ProfilePageProps {
	className?: string;
}

// async chunk reducer
const reducers: ReducerList = { profile: profileReducer };

const ProfilePage: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
	const { className } = props;
	const { t } = useTranslation();

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.ProfilePage, {}, [className])}>
				<ProfileCard />
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
