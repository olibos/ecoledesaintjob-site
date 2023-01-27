import fs from 'fs';
import glob from 'glob';
import zopfli from 'node-zopfli';
import zlib from 'zlib';

export function compress()
{
    console.info('Compress assets in Brotli & GZip...')
    const BROTLI_OPTIONS = {
        params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]:
                zlib.constants.BROTLI_MAX_QUALITY,
        },
    };

    glob('./dist/**/*.*', { ignore: ['./dist/**/*.png', './dist/**/*.gz', './dist/**/*.br', './dist/robots.txt', './dist/staticwebapp.config.json'] },
        (_, files) =>
        {
            for (const file of files)
            {
                const stream = fs.createReadStream(file);
                stream.pipe(zopfli.createGzip({ numiterations: 15 })).pipe(fs.createWriteStream(`${file}.gz`));
                stream.pipe(zlib.createBrotliCompress(BROTLI_OPTIONS)).pipe(fs.createWriteStream(`${file}.br`));
            }
        });
}