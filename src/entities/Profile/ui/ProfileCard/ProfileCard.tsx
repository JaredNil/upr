import { useTranslation } from 'react-i18next';

import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import Input from 'shared/ui/Input/Input';

import cls from './ProfileCard.module.scss';
import { Profile } from '../../../Profile/model/types/profile';
import PageLoader from 'widgets/PageLoader/PageLoader';
import { memo } from 'react';

interface ProfileCardProps {
	className?: string;
	data: Profile;
	isLoading?: boolean;
	errorData?: string;
	onChangeFirstname: (value?: string) => void;
	onChangeLastname: (value?: string) => void;
	onChangeAge: (value?: string | number) => void;
	onChangeCity: (value?: string) => void;
	readonly: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = memo((props: ProfileCardProps) => {
	const { className, data, isLoading, errorData, onChangeFirstname, onChangeLastname, onChangeAge, onChangeCity, readonly } = props;

	const { t } = useTranslation();

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			{isLoading && <PageLoader />}
			{errorData && (
				<Text
					title={t('Произошла ошибка')}
					text={t('Пожалуйста перезагрузите приложение.')}
					theme={TextTheme.ERROR}
					align={TextAlign.CENTER}
				/>
			)}
			{!isLoading && !errorData && (
				<>
					<div className={cls.data}>
						<Input
							placeholder={t('Ваше имя')}
							className={cls.input}
							onChange={onChangeFirstname}
							value={data?.first}
							readonly={readonly}
						/>
						<Input
							placeholder={t('Ваша фамилия')}
							className={cls.input}
							onChange={onChangeLastname}
							value={data?.lastname}
							readonly={readonly}
						/>
						<Input
							placeholder={t('Ваш возраст')}
							className={cls.input}
							onChange={onChangeAge}
							value={data?.age}
							readonly={readonly}
						/>
						<Input
							placeholder={t('Ваш город')}
							className={cls.input}
							onChange={onChangeCity}
							value={data?.city}
							readonly={readonly}
						/>
					</div>
				</>
			)}
		</div>
	);
});
