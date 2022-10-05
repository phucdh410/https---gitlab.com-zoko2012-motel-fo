const path = require('path');

module.exports = {
	style: {
		postcssOptions: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
	},
	webpack: {
		alias: {
			'@apis': path.resolve(__dirname, 'src/apis'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@components': path.resolve(__dirname, 'src/common/components'),
			'@constants': path.resolve(__dirname, 'src/common/constants'),
			'@routes': path.resolve(__dirname, 'src/common/routes'),
			'@configs': path.resolve(__dirname, 'src/configs'),
			'@contexts': path.resolve(__dirname, 'src/contexts'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@modules': path.resolve(__dirname, 'src/modules'),
			'@redux': path.resolve(__dirname, 'src/redux'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@axios': path.resolve(__dirname, 'src/utils/axios'),
			'@theme': path.resolve(__dirname, 'src/theme'),
		},
	},
};
