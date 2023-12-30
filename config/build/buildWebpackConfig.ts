import webpack from 'webpack';
import path from "path";

import buildPlugins from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";

import { BuildOptions } from './types/config';
import buildDevServer from './buildDevServer';

export function buildWebpackConfig( options : BuildOptions): webpack.Configuration{
    const {mode, paths} = options


    return {
        mode: mode,
    
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
    
        plugins: buildPlugins(options),
    
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devtool: 'inline-source-map',
        devServer: buildDevServer(options),
    };
} 