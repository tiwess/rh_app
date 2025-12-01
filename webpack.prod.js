/* eslint-disable */
const { merge } = require("webpack-merge");
const dev = require('@tiwess/toolchains/webpack.dev');

module.exports = merge(dev(__dirname), {
	// add your config here
});
