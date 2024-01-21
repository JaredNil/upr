import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button, { ThemeButton } from './Button';

import { themeDecorator } from 'shared/config/storybook/StyleDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Button> = {
	title: 'shared/Button',
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FirstStory: Story = {
	args: { children: 'Text', theme: ThemeButton.CLEAR },
	decorators: [themeDecorator(Theme.LIGHT)],
};

export const SecondStory: Story = {
	args: { children: 'Text', theme: ThemeButton.CLEAR },
	decorators: [themeDecorator(Theme.DARK)],
};
