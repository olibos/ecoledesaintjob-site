const { interpolateName } = require('loader-utils');
const path = require("path");
const fs = require("fs");
const DEFAULT_OPTIONS = {
  assetPrefix: '/_next/',
  filename: 'static/media/[name].[hash:8].[ext]',
};

/**
 * 
 * @param {string} context 
 * @param {string} rootContext 
 * @param {string} file 
 * @returns 
 */
function getLocalFile(context, rootContext, file)
{
  if (!file)
  {
    return;
  }

  return [
    path.join(context || rootContext, file),
    path.join(context || rootContext, file.replace(/^\//, '')),
    path.join(rootContext, "public", file),
    path.join(rootContext, "public", file.replace(/^\//, '')),
  ].find(fs.existsSync);
}


module.exports = function ManifestLoader(content)
{
  const getTarget = (interpolatedName) => `../${isDev ? '' : '../'}${interpolatedName}`;

  const { isDev, assetPrefix, filename } = { ...DEFAULT_OPTIONS, ...this.getOptions() };
  const manifest = JSON.parse(content);
  const context = this.context || this.rootContext;
  for (const icon of manifest.icons)
  {
    let file = getLocalFile(this.context, this.rootContext, icon.src);
    if (!file)
    {
      continue;
    }

    this.dependency(file);
    const fileContent = fs.readFileSync(file);
    const targetFile = interpolateName({ resourcePath: file }, filename, { context, content: fileContent });
    this.emitFile(getTarget(targetFile), fileContent);
    icon.src = `${assetPrefix}${targetFile}`;
  }

  content = JSON.stringify(manifest, undefined, 0);
  const name = interpolateName(this, filename, { context, content })
  this.emitFile(getTarget(name), content);
  return `export default ${JSON.stringify(`${assetPrefix}${name}`)}`;
}