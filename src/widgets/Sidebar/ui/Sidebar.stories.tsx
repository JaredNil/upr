import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Sidebar from './Sidebar';

import { themeDecorator } from 'shared/config/storybook/StyleDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Sidebar> = {
	title: 'widget/Sidebar',
	component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarLight: Story = {};

export const SidebarDark: Story = {
	decorators: [themeDecorator(Theme.DARK)],
};
