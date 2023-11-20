import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config.types";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildImageLoader } from "./loaders/buildImageLoader";
import { buildCssModuleLoader } from "./loaders/buildCssModuleLoader";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const htmlLoader = {
    test: /\.html$/i,
    loader: "html-loader",
  };

  const handlebarsLoader = {
    test: /\.hbs$/,
    loader: "handlebars-loader",
  };

  const cssLoader = buildCssLoader(isDev);
  const cssModuleLoader = buildCssModuleLoader(isDev);
  const babelLoader = buildBabelLoader();
  const imageLoader = buildImageLoader();

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fontsLoader = {
    test: /\.woff2?$/i,
    type: "asset/resource",
    generator: {
      filename: "[name][ext]",
    },
  };

  return [
    babelLoader,
    cssLoader,
    cssModuleLoader,
    fontsLoader,
    htmlLoader,
    svgLoader,
    imageLoader,
    typescriptLoader,
    handlebarsLoader,
  ];
}
