import svelte from 'rollup-plugin-svelte';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import { less } from 'svelte-preprocess-less';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default {
  // input: 'content/js/index.js',
  input: {
    content: 'content/js/index.js',
    background: 'background/index.js',
  },
  output: {
    // content: {
    //   file: '../dist/js/content.js',
    //   format: 'iife',
    // },


    // // file: '../dist/js/content.js',
    dir: '../dist/js/',
    // entryFileNames: '../dist/js/[name].js',
    // format: 'iife',
    format: 'esm',
  },
  plugins: [
    copy({
      targets: {
        'manifest.json': '../dist/manifest.json',
        'content/images': '../dist/images',
        'content/popup.html': '../dist/popup.html',
      }
    }),
    postcss({
      plugins: [
        autoprefixer(),
      ],
      extract: '../dist/css/style.css',
      minimize: true,
    }),
    svelte({
      emitCss: true,
      preprocess: {
        style: less(),
      },
    }),
    resolve(),
    commonjs(),
    terser(),
  ]
};