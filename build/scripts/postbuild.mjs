import { compress } from './compress.mjs';

if (process.env.BUILD_TRIGGER !== 'pull_request')
{
    compress();
}
else
{
    console.warn('No compression for PRs.');
}
