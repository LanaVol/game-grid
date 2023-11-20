import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoader = (isDev: boolean) => {
  const styleLoader = isDev ? "style-loader" : MiniCssExtractPlugin.loader;

  return {
    test: /\.(c|sa|sc)ss$/i,
    exclude: /\.module\.(c|sa|sc)ss$/i,
    use: [
      styleLoader,
      "css-loader",
      {
        loader: "postcss-loader",
        options: { postcssOptions: { plugins: [require("postcss-preset-env")] } },
      },
      { loader: "sass-loader", options: { sourceMap: true } },
    ],
  };
};
