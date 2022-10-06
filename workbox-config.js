module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jfif,png,html,json,md,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};