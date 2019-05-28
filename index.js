const { resolve } = require('path');

function TypescriptPlugin (api) {
  api.chainWebpack((config) => {
    config.module
      .rule('typescript')
        .test(/\.tsx?$/)
        .use()
          .loader('awesome-typescript-loader')
          .options({ appendTsSuffixTo: [/\.vue$/] });

    config.resolve.extensions
      .add('.ts');

    config.resolve.alias
      .set('vue$', resolve(process.cwd(), './node_modules/vue/dist/vue.esm.js'));
  });
}

module.exports = TypescriptPlugin;
