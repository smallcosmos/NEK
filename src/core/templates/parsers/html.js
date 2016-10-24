/**
 * HtmlParser的作用:
 * 1. writePage: 输出{jsRoot}/{pageName}/page.html, 其中jsRoot是从.nekrc中读取的, pageName是从meta中读取的;
 * 2. writeModules: 输出{jsRoot}/{pageName}/modules/{moduleName}/index.html, 其中moduleName是从meta中读取的;
 */
import path from 'path';
import { html } from 'js-beautify';

import BaseParser from './base';
import conf from '../../util/rc';

class HtmlParser extends BaseParser {
  constructor() {
    super();
    this.templatePath = './tmp/template.html';
  }

  format(content) {
    return html(content, { indent_size: 2 });
  }

  async writePage() {
    const meta = this.meta;
    const rst = this.template(meta);
    const out = path.join(conf.jsRoot, meta.pageName, 'modules');

    this._writeFile(out, 'page.html', rst);
  }

  async writeModules() {
    const modules = this.modules;
    const meta = this.meta;
    modules.forEach((mod) => {
      const { name } = mod;
      const rst = this.template(mod);
      const out = path.join(conf.jsRoot, meta.pageName, 'modules', name);

      this._writeFile(out, 'index.html', rst);
    });
  }
}

export default HtmlParser;
