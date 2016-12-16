import Builder from '../core/builder';

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
};

exports.handler = async (argv) => {
  const { key, url } = argv;

  try {
    const builder = new Builder(key);
    builder.run(url);
  } catch (error) {
    console.error(error);
  }
};
