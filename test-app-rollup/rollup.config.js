import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import image from '@rollup/plugin-image';
import css from 'rollup-plugin-css-only'

export default {
  input: 'src/index.js',
  output: {
    file: 'build/index.js',
    format: 'iife', // immediately-invoked function, to make it work in script tag
    sourcemap: false
  },
  plugins: [
    replace({ // to make react work, otherwise it complains about "Uncaught ReferenceError: process is not defined"
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    resolve(), // tells Rollup how to find date-fns in node_modules
    babel({ // to transpile the code
      exclude: 'node_modules/**'
    }),
    commonjs(), // converts date-fns to ES modules
    image(), // to handle the png file
    css({ output: 'build/bundle.css' }),
    terser() // to minify the code
  ]
};