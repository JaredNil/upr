import { type MouseEventHandler, createContext } from 'react';

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

export interface ThemeContextProps {
	setTheme?: (theme: Theme, event?: MouseEventHandler<HTMLButtonElement>) => void;
	theme?: Theme;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
