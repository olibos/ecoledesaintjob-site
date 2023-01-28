import { resolve } from 'path';

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
                port: '',
                pathname: '/stockath/stjob/**',
            },
        ],
    },
};

/** @type {(phase: string) => import("next").NextConfig} */
function build(phase)
{
    return {
        ...config,
        webpack(config, options)
        {
            let cfg = options.config.serverRuntimeConfig;
            options.config.publicRuntimeConfig.isDev = cfg.isDev = options.dev;
            options.config.publicRuntimeConfig.isStatic = cfg.isStatic = !options.dev && !cfg.isPreview;
            if (options.isServer && !options.dev)
            {
                writeFileSync(resolve("./.next/script-csp.json"), '[]');
            }
            config.module.rules.push(
                {
                    test: /\.webmanifest$/,
                    use: [{ loader: resolve('build/webpack/manifest-loader.js') }]
                },
                {
                    test: /browserconfig\.xml$/,
                    use: [{ loader: resolve('build/webpack/browserconfig-loader.js') }]
                });
            return config;
        },
    }
}

export default build;