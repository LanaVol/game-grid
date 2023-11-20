import { WebpackPluginInstance, ProgressPlugin, HotModuleReplacementPlugin } from "webpack";
import { BuildOptions } from "./types/config.types";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!public", "!public/**"],
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[name].[contenthash:8].css",
    }),
    new HotModuleReplacementPlugin(),
  ].concat(
    paths.html.map(
      (page) =>
        new HtmlWebpackPlugin({
          ...page,
          chunks: [page.filename.split(".")[0], "index"],
        })
    )
  );
}
