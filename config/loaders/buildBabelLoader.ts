export const buildBabelLoader = () => {
  return {
    test: /\.(?:js|mjs|cjs)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [["@babel/preset-env", { targets: "defaults" }]],
      },
    },
  };
};
