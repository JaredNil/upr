import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import PageLoader from './PageLoader';

import { themeDecorator } from 'shared/config/storybook/StyleDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof PageLoader> = {
	title: 'widget/PageLoader',
	component: PageLoader,
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const PageLoaderLight: Story = {};

export const PageLoaderDark: Story = {
	decorators: [themeDecorator(Theme.DARK)],
};
