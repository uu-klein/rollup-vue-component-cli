/*
 * @Author: tyson
 * @LastEditTime: 2021-04-03 18:03:32
 * @LastEditors: Please set LastEditors
 * @Description:  公共配置
 * @FilePath: \rollup-vue-component-cli\config\rollup.config.ts
 *
 * @Date: 2021-04-03 15:46:56
 */

/**
 * @author: tyson
 * @description: package.json配置
 * @Date: 2021-04-01 15:21:44
 */
import json from "rollup-plugin-json";

/**
 * @author: tyson
 * @description: 解析 node_modules 中的模块
 * @Date: 2021-04-01 15:21:01
 */
import { nodeResolve } from "@rollup/plugin-node-resolve";

/**
 * @author: tyson
 * @description:  转换 CJS -> ESM
 * @Date: 2021-04-01 15:20:51
 */
import commonjs from "@rollup/plugin-commonjs";

/**
 * @author: tyson
 * @description: 显示包大小
 * @Date: 2021-04-01 15:20:41
 */
import filesize from "rollup-plugin-filesize";

/**
 * @author: tyson
 * @description: 使用 Babel
 * @Date: 2021-04-01 15:20:17
 */
import { babel } from "@rollup/plugin-babel";

/**
 * @author: tyson
 * @description: 区分 Development 与 Production 环境   通过 process.env.NODE_ENV
 * @Date: 2021-04-01 15:13:30
 */
import replace from "@rollup/plugin-replace";

/**
 * @author: tyson
 * @description: Typescript
 * @Date: 2021-04-01 15:13:11
 */
import typescript from "rollup-plugin-typescript2";

/**
 * @author: tyson
 * @description: types
 * @Date: 2021-04-03 16:31:01
 */
import { configProps } from "./config.types";

/**
 * @author: tyson
 * @description: 环境变量 env
 * @Date: 2021-04-03 15:55:45
 */
const env: string | undefined = process.env.NODE_ENV;

/**
 * @author: tyson
 * @description: 入口文件
 * @Date: 2021-04-03 15:58:01
 */
const input: string = "src/index.ts";

/**
 * @author: tyson
 * @description: 各类插件
 * @Date: 2021-04-03 16:04:39
 */
const plugins: Plugin | (Plugin | void)[] = [
  nodeResolve(),
  commonjs(),
  json(),
  typescript(),
  babel({
    exclude: "node_modules/**",
    babelHelpers: "bundled",
  }),
  replace({
    "process.env.NODE_ENV": JSON.stringify(env),
    preventAssignment: true,
  }),
  filesize(),
];

export const commonConfig: configProps = {
  input,
  plugins,
};