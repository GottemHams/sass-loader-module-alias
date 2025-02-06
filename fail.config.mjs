'use strict';

import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname = new URL('.', import.meta.url).pathname;

export default {
	mode: 'production',
	target: 'browserslist',
	devtool: 'source-map',
	entry: path.resolve(__dirname, 'sass', 'entry.scss'),
	output: {
		path: path.resolve(__dirname, 'css'),
		clean: true,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			runtime: false,
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				resolve: {
					extensions: ['.scss'],
					alias: {
						'@aliased': path.resolve(__dirname, 'sass', 'alias'),
					},
				},
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							url: false,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							sassOptions: {
								silenceDeprecations: ['import'],
							},
						},
					},
				],
			},
		],
	},
};
