import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Navbar from './Navbar';

import { themeDecorator } from 'shared/config/storybook/StyleDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Navbar> = {
	title: 'widget/Navbar',
	component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavbarLight: Story = {};

export const NavbarDark: Story = {
	decorators: [themeDecorator(Theme.DARK)],
};
