module.exports = {
	extends: '@monogram/eslint-config/next',
	rules: {
		'no-promise-executor-return': 'off'
		// 'no-restricted-syntax': [
		// 	'error',
		// 	{
		// 		selector: 'ExportDefaultDeclaration',
		// 		message: 'Prefer named exports'
		// 	}
		// ],
	}
}
