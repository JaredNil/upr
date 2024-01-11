export type BuildModeType = 'production' | 'development'

export interface BuildPaths {
    entry: string
    build: string
    html: string,
    src: string
}

export interface BuildOptions {
    mode: BuildModeType
    paths: BuildPaths
    isDev: boolean
    port: number
}

export interface BuildEnv {
    mode: BuildModeType
    port: number
}