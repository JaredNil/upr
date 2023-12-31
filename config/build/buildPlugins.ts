import webpack  from "webpack";
import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { BuildOptions } from "./types/config";

export default function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const {mode, paths} = options
   
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ]
}