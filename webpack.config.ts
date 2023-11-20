import path from "path";
import { Configuration } from "webpack";
import { buildWebpackConfig, BuildEnv, BuildPaths } from "./config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: {
      index: path.resolve(__dirname, "src", "index.ts"),
    },
    html: [
      {
        filename: "index.html",
        title: "Home Page",
        template: path.resolve(__dirname, "src", "index.html"),
        description: "Home Page Description",
      },
    ],
    build: path.resolve(__dirname, "dist"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const PORT = env.port || 3000;
  const isDev = mode === "development";

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
