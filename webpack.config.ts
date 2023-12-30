import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths } from "./config/build/types/config";

const paths: BuildPaths = {
    'entry': path.resolve(__dirname, "src", "index"),
    'build': path.resolve(__dirname, "build"),
    'html' : path.resolve(__dirname, "public", "index.html"),
}

const PORT_DEV_SERVER = 3000;

const config: webpack.Configuration = buildWebpackConfig({
    mode:'development',
    paths: paths,
    isDev: true,
    port: PORT_DEV_SERVER,
});

export default config;
