const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		contacts: './src/js/contacts.js',
		laser_machines: './src/js/laser_machines.js',
		parts: './src/js/parts.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
