module.exports = {
	mode: "production",
	entry: {
		cdn: "./src/index.js"
	},
	output: {
		path: __dirname + "/dist",
		filename: "npm-template-node.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							["@babel/preset-env", {
								"useBuiltIns": "usage"
							}]
						]
					}
				}
			}
		]
	},
	devServer: {
		static: {
			directory: __dirname + "dist",
			publicPath: "/dist"
		},
		host: "localhost",
		port: 8080,
		compress: true,
		hot: true
	}
}