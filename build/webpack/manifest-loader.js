const {interpolateName} = require('loader-utils');
const path = require("path");
const fs = require("fs");
const DEFAULT_OPTIONS = {
  publicPath: '/_next/',
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

module.exports = function ManifestLoader(content) {
    const options = {...DEFAULT_OPTIONS, ...this.getOptions()};
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
      const targetFile = interpolateName({resourcePath: file}, options.filename, {context, content: fileContent});
      this.emitFile(targetFile, fileContent);
      icon.src = `${options.publicPath}${targetFile}`;
    }

    content = JSON.stringify(manifest, undefined, 0);
    const name = interpolateName(this, options.filename, {context, content})
    this.emitFile(name, content);
    return `export default ${JSON.stringify(`${options.publicPath}${name}`)}`;
  }