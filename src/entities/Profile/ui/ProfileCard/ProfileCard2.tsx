import { v4 as uuidv4 } from 'uuid';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';
import { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { profileAction } from 'entities/Profile/model/silce/profileSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfileCard2Props {
	className?: string;
	onChangeFirstname: (value: string) => void;
	onChangeLastname: (value: string) => void;
}

export const ProfileCard2: React.FC<ProfileCard2Props> = memo((props: ProfileCard2Props) => {
	const { className } = props;

	const data = useSelector(getProfileData) || {};

	const dispatch = useAppDispatch();

	useEffect(() => {
		console.log('render Card');
	});

	const onChangeFirstname = useCallback(
		(value: string) => {
			dispatch(profileAction.updateProfile({ first: value }));
		},
		[dispatch]
	);

	const onChangeLastname = useCallback(
		(value: string) => {
			dispatch(profileAction.updateProfile({ lastname: value }));
		},
		[dispatch]
	);

	const [first, setFirst] = useState('Start');
	const [first2, setFirst2] = useState('End');

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.data}>
				{/* <input onChange={(e) => onChangeFirstname(e.target.value)} value={data.first} /> */}
				{/* <input onChange={(e) => onChangeLastname(e.target.value)} value={data.lastname} /> */}
				<input onChange={(e) => setFirst(e.target.value)} value={first} />
				<input
					onChange={(e) => {
						e.preventDefault();
						setFirst2(e.target.value);
					}}
					value={first2}
				/>
			</div>
		</div>
	);
});
