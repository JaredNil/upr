import webpack  from "webpack";
import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";

export default function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const {mode, paths} = options
   
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),

        new webpack.ProgressPlugin(),
    ]
}