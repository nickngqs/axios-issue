// Rollup plugins
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: 'src/main.js',
	output: {
		file: 'dist/bundle.js',
		format: 'iife'
	},
	sourcemap: 'inline',
	plugins: [
		globals(),
		resolve({
			jsnext: true,
			main: true,
			browser: true,
		}),
		commonjs()
	]
}