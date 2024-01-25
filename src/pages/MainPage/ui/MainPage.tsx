import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import BugButton from 'widgets/PageError/ui/BugButton';

const MainPage: React.FC = () => {
	const { t } = useTranslation();
	const [value, setValue] = useState('');

	const onChange = (val: string) => {
		setValue(val);
	};

	return (
		<div>
			{/* <BugButton /> */}
			<Input
				value={value}
				onChange={onChange}
				placeholder="Введите текст"
			/>
			{t('Главная_титул')}
		</div>
	);
};

export default MainPage;
