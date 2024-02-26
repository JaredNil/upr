import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadOnly } from 'entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback } from 'react';
import { profileAction, updateProfileData } from 'entities/Profile';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = memo((props: ProfilePageHeaderProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const { t } = useTranslation('profile');

	const readonly = useSelector(getProfileReadOnly);

	const onEdit = useCallback(() => {
		dispatch(profileAction.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileAction.cancelEdit());
	}, [dispatch]);

	const onSaveEdit = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);

	return (
		<div className={classNames(cls.ProfilePageHeader, {}, [className])}>
			<Text title={t('Профиль')} />
			{readonly ? (
				<Button theme={ButtonTheme.OUTLINE} className={cls.editBtn} onClick={onEdit}>
					{t('Редактировать')}
				</Button>
			) : (
				<>
					<Button theme={ButtonTheme.OUTLINE_RED} className={cls.editBtn} onClick={onCancelEdit}>
						{t('Отменить')}
					</Button>
					<Button theme={ButtonTheme.OUTLINE} className={cls.saveBtn} onClick={onSaveEdit}>
						{t('Сохранить')}
					</Button>
				</>
			)}
		</div>
	);
});
