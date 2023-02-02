import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import progress from 'rollup-plugin-progress'
import filesize from 'rollup-plugin-filesize'
// import path from 'path'
import {
  name as pkgName,
  module as esmBundle,
  main as umdBundle
} from './package.json'

const name = pkgName.split('/').pop()

const plugins = [
  commonjs({
    include: ['node_modules/**', 'node_modules/**/*', 'dist/**/*']
  }),
  nodeResolve({
    jsnext: true,
    main: true,
    extensions: ['.js', '.ts', '.json']
  }),
  typescript({
    tsconfig: 'tsconfig.json'
  }),
  progress(),
  filesize()
]
const bundleConfig = {
  input: 'src/index.ts',
  output: [
    {
      name,
      file: esmBundle,
      format: 'es',
      exports: 'auto'
    },
    {
      name,
      file: umdBundle,
      format: 'umd',
      exports: 'named'
    }
  ],
  plugins
}

export default [bundleConfig]
