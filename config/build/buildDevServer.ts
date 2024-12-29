import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true, // при перезагрузке страницы can't get /about
    hot: true , //  при изменении в коде не перезагружает страницу
  };
}
