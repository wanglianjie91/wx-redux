import { nodeResolve } from '@rollup/plugin-node-resolve';      // 帮助寻找node_modules里的包
import { babel } from '@rollup/plugin-babel';                   // rollup 的 babel 插件，ES6转ES5
import replace from '@rollup/plugin-replace';                   // 替换
import typescript from '@rollup/plugin-typescript';         
import { terser } from "rollup-plugin-terser";

const env = process.env.NODE_ENV;

export default {
  input: {
    'Redux':'./src/index.ts',
    'connect': './src/connect.ts',
    'provider': './src/provider.ts'
  },
  output: {
    dir:'./dist',
    format: 'esm'
  },
  plugins: [
    nodeResolve(),
    babel({ babelHelpers: 'bundled' }),
    typescript({
      tsconfig:'./tsconfig.json'
    }),
    terser(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};