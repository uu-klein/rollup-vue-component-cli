/*
 * @Author: tyson
 * @LastEditTime: 2021-04-03 17:03:16
 * @LastEditors: Please set LastEditors
 * @Description: types文件
 * @FilePath: \rollup-vue-component-cli\config\config.types.ts
 *
 * @Date: 2021-04-03 16:28:25
 */

export interface outputProps {
  file: String;
  format?: "amd" | "cjs" | "es" | "iife" | "umd" | "system";
  name?: String;
  globals?: { [id: string]: String } | ((id: String) => String);
  paths?: any;
  sourcemap?: Boolean | "inline";
}

export interface configProps {
  input: String | String[] | { [entryName: string]: string };
  plugins: Plugin | (Plugin | void)[];
  onwarn?: Function;
  external?:
    | String[]
    | ((id: string, parentId: string, isResolved: boolean) => boolean);
  output?: outputProps | Object;
  manualChunks?:
    | { [chunkAlias: string]: String[] }
    | ((id: String) => String | void);
}
