const { interpolateName } = require('loader-utils');
const path = require("path");
const fs = require("fs");
const xpath = require('xpath');
const dom = require('@xmldom/xmldom').DOMParser;
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

module.exports = function BrowserConfigLoader(content) {
    const options = {...DEFAULT_OPTIONS, ...this.getOptions()};
    const browserConfig = new dom().parseFromString(content);
    const context = this.context || this.rootContext;
    
    for (const link of xpath.select('//*[@src]', browserConfig))
    {
      let file = getLocalFile(this.context, this.rootContext, link.getAttribute('src'));
      if (!file)
      {
        continue;
      }

      this.dependency(file);
      const fileContent = fs.readFileSync(file);
      const targetFile = interpolateName({resourcePath: file}, options.filename, {context, content: fileContent});
      this.emitFile(targetFile, fileContent);
      link.setAttribute('src', `${options.publicPath}${targetFile}`);
    }

    content = browserConfig.toString();
    const name = interpolateName(this, options.filename, {context, content})
    this.emitFile(name, content);
    return `export default ${JSON.stringify(`${options.publicPath}${name}`)}`;
  }