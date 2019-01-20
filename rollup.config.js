// For both browsers and Node.js:
// UMD format requires a bundle name

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";

// get the name from our package json
const name = 'Attention';

export default {
    input: 'src/js/index.js',
    output: {
        file: `dist/${name.toLowerCase()}.js`,
        format: 'umd',
        name: name
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        uglify()
    ]
};
