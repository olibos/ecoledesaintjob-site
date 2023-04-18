import { writeFileSync } from 'fs';
import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} from 'next/constants.js';
import { resolve } from 'path';

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,
    experimental:{
        appDir: true,
    },
    trailingSlash: true,
    async headers(){
        return [{
            source:"/:all*",
            headers:[{
                key:"content-security-policy",
                value:"default-src 'none';manifest-src 'self';connect-src 'self';style-src 'unsafe-inline' 'self' https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/;script-src 'unsafe-eval' 'unsafe-inline' 'self'; img-src 'self' data: https://ik.imagekit.io/stockath/stjob/ cdn-61373911c1ac189674c0a5e7.closte.com; font-src 'self' https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/webfonts/"
            }]
        }]
    },
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

/** @type {(phase: PHASE_DEVELOPMENT_SERVER | PHASE_PRODUCTION_BUILD | PHASE_PRODUCTION_SERVER) => import("next").NextConfig} */
function build(phase)
{
    const isExport = phase === PHASE_PRODUCTION_BUILD;
    return {
        ...config,
        headers: !isExport ? config.headers : undefined, 
        output: isExport ? 'export' : undefined,
        distDir: isExport ? 'dist' : undefined,
        images:{
            ...config.images,
            loader: isExport ? 'custom' : 'default',
            loaderFile: isExport ? './src/images/loader.ts' : undefined
        },
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