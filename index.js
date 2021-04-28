const { resolve } = require('path');
const { existsSync } = require('fs');

function TypescriptPlugin (api) {
  api.chainWebpack((config) => {
    config.module
      .rule('typescript')
      .test(/\.tsx?$/)
      .use()
      .loader('ts-loader')
      .options({ appendTsSuffixTo: [/\.vue$/], transpileOnly: true });

    config.resolve.extensions
      .add('.ts');

    config.resolve.alias
      .set('vue$', vueEsmPath());
  });
}

function vueEsmPath() {
  const vueEsmPaths = [];
  try {
    vueEsmPaths.push(require.resolve('vue/dist/vue.esm.js'));
  } catch (e) {}
  vueEsmPaths.push(resolve(process.cwd(), './node_modules/vue/dist/vue.esm.js'));
  vueEsmPaths.push(resolve(__dirname, '../vue/dist/vue.esm.js'));

  for (const vueEsmPath of vueEsmPaths) {
    if (existsSync(vueEsmPath)) return vueEsmPath;
  }
}

module.exports = TypescriptPlugin;
