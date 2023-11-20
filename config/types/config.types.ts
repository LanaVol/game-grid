export type BuildMode = "production" | "development";

interface IPagePathObject {
    filename: string;
    title: string;
    template: string;
    description: string;
}

export interface BuildPaths {
    entry: any;
    build: string;
    html: IPagePathObject[];
    src: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}
