const Builder = require('../core/builder');
const log = require('../core/util/log');

exports.command = 'build [options]';

exports.desc = 'Build New Page';

exports.builder = {
  k: {
    alias: 'key',
    demand: false,
    describe: 'Unique id mapped the project and the page configuration json object',
    type: 'string',
  },
  u: {
    alias: 'url',
    demand: false,
    describe: '输入页面的url,NEK根据URL生成指定的约定的目录结构',
    type: 'string',
  },
  f: {
    alias: 'force',
    demand: false,
    describe: '强制覆盖已经存在的文件',
    type: 'boolean',
  },
};

exports.handler = async (argv) => {
  const { key, url, force } = argv;

  try {
    const builder = new Builder(key, force);
    builder.run(url);
  } catch (error) {
    log.red(error);
  }
};
