import { classNames } from 'shared/lib/classNames/classNames';
import { InputHTMLAttributes, memo, useEffect, useState } from 'react';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		autoFocus,
		placeholder,
		...otherProps
	} = props;

	const [isFocused, setIsFocused] = useState(false);
	const [caretPos, setCaretPos] = useState(0);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
		setCaretPos(e.target.value.length);
	};

	const onBlur = () => {
		setIsFocused(false);
	};
	const onFocus = () => {
		setIsFocused(true);
	};
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSelect = (e: any) => {
		setCaretPos(e?.target?.selectionStart || 0);
	};

	useEffect(() => {
		if (autoFocus) {
			setIsFocused(true);
		}
	}, [autoFocus]);

	return (
		<div className={classNames(cls.InputWrapper, {}, [className])}>
			{placeholder && (
				<div
					className={cls.placeholder}
				>{`${placeholder}>`}</div>
			)}
			<div className={cls.caterWrapper}>
				<input
					className={cls.input}
					type={type}
					value={value}
					onChange={onChangeHandler}
					onFocus={onFocus}
					onBlur={onBlur}
					onSelect={onSelect}
					{...otherProps}
				/>
				{isFocused && (
					<span
						className={cls.caret}
						style={{
							left: `${caretPos * 7.6}px`,
						}}
					/>
				)}
			</div>
		</div>
	);
});

export default Input;
