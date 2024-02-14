import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
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
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
	const { className, data, isLoading, errorData, onChangeFirstname, onChangeLastname } = props;

	if (data) {
		const { first, lastname, age, currency, country, city, username, avatar } = data;
	}
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])} key={uuidv4()}>
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
							value={data?.first}
							placeholder={t('Ваше имя')}
							className={cls.input}
							onChange={onChangeFirstname}
						/>
						<Input
							value={data?.lastname}
							placeholder={t('Ваша фамилия')}
							className={cls.input}
						/>
					</div>
				</>
			)}
		</div>
	);
};
