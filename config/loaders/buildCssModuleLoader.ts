import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssModuleLoader = (isDev: boolean) => {
  const styleLoader = isDev ? "style-loader" : MiniCssExtractPlugin.loader;

  return {
    test: /\.module\.s[ac]ss$/i,
    use: [
      styleLoader,
      {
        loader: "css-loader",
        options: {
          modules: {
            mode: "local",
            localIdentName: "[local]--[hash:base64:5]",
          },
        },
      },
      {
        loader: "postcss-loader",
        options: { postcssOptions: { plugins: [require("postcss-preset-env")] } },
      },
      { loader: "sass-loader", options: { sourceMap: true } },
    ],
  };
};
