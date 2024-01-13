
import  webpack from 'webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { BuildOptions } from './types/config';

export default function buildLoader({isDev}: BuildOptions):webpack.RuleSetRule[]{

    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    }
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
        //   style-loader - Стилизует код, MiniCssExtractPlugin - раскидывает на отдельные файлы scss files в проде
        (isDev) ? 'style-loader' :  MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev 
                        ? '[path].[name]__[local]--[hash:base64:5]' 
                        : '[hash:base64:8]'
                },
            }
        },
        "sass-loader",
        ],
    }

    const svgLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
            },
        ],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
    


    return [
        fileLoader,
        svgLoader,
        tsLoader, 
        scssLoader,
    ]
}