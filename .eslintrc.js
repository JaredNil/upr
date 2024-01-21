module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	ignorePatterns: ['build/', 'config/', 'webpack.config.ts'],
	rules: {
		'prefer-const': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-explicit-any': 'error',
		'react/react-in-jsx-scope': 'off',
		'import/prefer-default-export': 'off',
		'react/function-component-definition': 'off',
		'react/require-default-props': 'off',
		indent: ['error', 'tab'],
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
	},
};
