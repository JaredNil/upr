import { type ButtonHTMLAttributes } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const {
        children,
        className,
        theme,
        ...otherProps
    } = props

    return (
        <button
            type='button'
            className={classNames(cls.Button, {}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button
