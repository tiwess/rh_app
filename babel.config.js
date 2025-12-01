export default {
	presets: [
		[
			"@tiwess/toolchains/babel.config.js",
			{ root: new URL(".", import.meta.url).pathname },
		],
	],
};
