import path from 'path'
// import copy from 'rollup-plugin-copy'
import replace from 'rollup-plugin-replace'
import html from 'rollup-plugin-html2'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import postcssMinify from 'postcss-minify'
import postcssImport from 'postcss-import'
import browserSync from 'rollup-plugin-browsersync'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import vuePlugin from 'rollup-plugin-vue'
import polyfill from 'rollup-plugin-polyfill-node'
// import image from '@rollup/plugin-image'
// import alias from '@rollup/plugin-alias'
// import json from '@rollup/plugin-json'

import commonjs from '@rollup/plugin-commonjs'
import progress from 'rollup-plugin-progress'
import filesize from 'rollup-plugin-filesize'

const isProduct = process.env.NODE_ENV === 'production'

const devBundleConfig = {
  input: path.resolve(__dirname, './examples/main.ts'),
  output: {
    name: 'examplesBundle',
    file: 'example/bundle.js',
    format: 'iife',
    extend: true,
    sourcemap: true
  },
  plugins: [
    vuePlugin({
      include: /\.vue$/,
      target: 'browser'
    }),
    commonjs({
      include: ['node_modules/**', 'node_modules/**/*', 'lib/**/*']
    }),
    // json(),
    polyfill(),
    nodeResolve({
      jsnext: true,
      main: true,
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue']
    }),
    // image(),
    esbuild({
      include: /\.[jt]sx?$/, // default, inferred from `loaders` option
      exclude: /node_modules/, // default
      minify: isProduct,
      target: 'esnext',
      tsconfig: 'tsconfig.json',
      loaders: {
        '.js': 'jsx'
      }
    }),
    progress(),
    filesize(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    postcss({
      plugins: [autoprefixer(), postcssPresetEnv(), postcssMinify(), postcssImport()]
    }),
    // copy({
    //   targets: [
    //     {
    //       src: 'lib/fonts/',
    //       dest: 'example/'
    //     }
    //   ]
    // }),
    html({
      template: 'examples/index.html',
      fileName: 'index.html'
    }),
    browserSync({
      server: {
        baseDir: path.resolve(__dirname, './example')
      },
      port: 9527
    })
  ]
}

export default [devBundleConfig]
