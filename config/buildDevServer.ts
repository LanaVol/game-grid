import path from "path";
import { BuildOptions } from "./types/config.types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
    static: {
      directory: path.resolve(options.paths.build),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
    client: {
      logging: "none",
      progress: true,
      overlay: true,
    },
  };
}
