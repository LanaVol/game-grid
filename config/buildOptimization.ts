import { WebpackPluginInstance } from "webpack";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

export function buildOptimization(): WebpackPluginInstance[] {
  return [
    new CssMinimizerPlugin(),
    new TerserPlugin({
      test: /\.js(\?.*)?$/i,
    }),
  ];
}
