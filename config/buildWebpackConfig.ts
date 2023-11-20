import { Configuration } from "webpack";
import { BuildOptions } from "./types/config.types";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./buildResolves";
import { buildDevServer } from "./buildDevServer";
import { buildOptimization } from "./buildOptimization";

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: {
        keep: "public",
      },
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(options),
    devtool: isDev ? false : "source-map",
    devServer: isDev ? buildDevServer(options) : undefined,
    optimization: {
      minimize: true,
      minimizer: buildOptimization(),
    },
  };
}
