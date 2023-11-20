export const buildImageLoader = () => {
  return {
    test: /\.(jpe?g|png|webp|gif|svg)$/i,
    // loader: "file-loader",
    // options: {
    //   name: "[name].[ext]",
    //   outputPath: "images",
    // },
  };
};
