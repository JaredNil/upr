import { useTranslation } from 'react-i18next';

import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';

import PageLoader from 'widgets/PageLoader/PageLoader';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';
import { CountrySelect } from '../../../Country/ui/CountrySelect/CountrySelect';

interface ProfileCardProps {
	className?: string;
	data: Profile;
	isLoading?: boolean;
	errorData?: string;
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeAge?: (value?: string | number) => void;
	onChangeCity?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
	onChangeCurrency?: (value?: Currency) => void;
	onChangeCountry?: (value?: Country) => void;
	readonly: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = memo((props: ProfileCardProps) => {
	const {
		className,
		data,
		isLoading,
		errorData,
		onChangeFirstname,
		onChangeLastname,
		onChangeAge,
		onChangeCity,
		onChangeUsername,
		onChangeAvatar,
		onChangeCurrency,
		onChangeCountry,
		readonly,
	} = props;

	const { t } = useTranslation();

	const mods: Mods = {
		[cls.editing]: !readonly,
	};

	return (
		<div className={classNames(cls.ProfileCard, mods, [className])}>
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
				<div className={cls.data}>
					{data?.avatar && (
						<div className={cls.avatarWrapper}>
							<Avatar src={data?.avatar} />
						</div>
					)}
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
						placeholder={t('Город')}
						className={cls.input}
						onChange={onChangeCity}
						value={data?.city}
						readonly={readonly}
					/>
					<Input
						placeholder={t('Введите имя пользователя')}
						className={cls.input}
						onChange={onChangeUsername}
						value={data?.username}
						readonly={readonly}
					/>
					<Input
						placeholder={t('Введите ссылку на аватар')}
						className={cls.input}
						onChange={onChangeAvatar}
						value={data?.avatar}
						readonly={readonly}
					/>
					<CurrencySelect
						className={cls.input}
						value={data?.currency}
						onChange={onChangeCurrency}
						readonly={readonly}
					/>
					<CountrySelect
						className={cls.input}
						value={data?.country}
						onChange={onChangeCountry}
						readonly={readonly}
					/>
				</div>
			)}
		</div>
	);
});
