import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";



export default (env: BuildEnv) => {
    
    const paths: BuildPaths = {
        'entry': path.resolve(__dirname, "src", "index"),
        'build': path.resolve(__dirname, "build"),
        'html' : path.resolve(__dirname, "public", "index.html"),
    }
    
    const PORT_DEV_SERVER = env.port || 3000;
    const MODE = env.mode || 'development'
    const isDev = (MODE === 'development')

    const config: webpack.Configuration = buildWebpackConfig({
        mode:  MODE,
        paths: paths,
        isDev: isDev,
        port: PORT_DEV_SERVER,
    });


    return config
};
