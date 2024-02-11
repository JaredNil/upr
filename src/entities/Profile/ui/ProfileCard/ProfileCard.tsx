import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import Text, { TextTheme } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';

import cls from './ProfileCard.module.scss';
import { Profile } from '../../../Profile/model/types/profile';
import PageLoader from 'widgets/PageLoader/PageLoader';

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	isLoading?: boolean;
	errorData?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
	const { className, data, isLoading, errorData } = props;

	if (data) {
		const { first, lastname, age, currency, country, city, username, avatar } =
			data;
	}
	const { t } = useTranslation();

	if (isLoading) {
		return (
			<div
				className={classNames(
					cls.ProfileCard,
					{ [cls.loading]: isLoading },
					[className]
				)}
				key={uuidv4()}
			>
				<PageLoader />
			</div>
		);
	}

	if (errorData) {
		return (
			<div
				className={classNames(cls.ProfileCard, {}, [
					className,
					cls.error,
				])}
				key={uuidv4()}
			>
				<Text
					title="Произошла ошибка"
					text={
						errorData
							? errorData
							: '' +
								' Пожалуйста перезагрузите приложение.'
					}
					theme={TextTheme.ERROR}
				/>
			</div>
		);
	}

	return (
		<div
			className={classNames(cls.ProfileCard, {}, [className])}
			key={uuidv4()}
		>
			<div className={cls.header}>
				<Text title={t('Профиль')}></Text>
				<Button
					theme={ButtonTheme.OUTLINE}
					className={cls.editBtn}
				>
					{t('Редактировать')}
				</Button>
			</div>
			<div className={cls.data}>
				<Input
					value={data?.first}
					placeholder={t('Ваше имя')}
					className={cls.input}
				/>
				<Input
					value={data?.lastname}
					placeholder={t('Ваша фамилия')}
					className={cls.input}
				/>
			</div>
		</div>
	);
};
